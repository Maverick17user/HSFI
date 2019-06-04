const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../validation/register/regOperator');
const validateLoginInput = require('../validation/login');

const Operator_User = require('../models/Operator_User');

const editLogic = require('./logic/edit')

router.post('/registerOperator', function(req, res) {

    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    Operator_User.findOne({
        email: req.body.email
    }).then(user => {
        if(user) {
            return res.status(400).json({
                email: 'Email already exists'
            });
        }
        else {
            const avatar = gravatar.url(req.body.email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });
            const role = 'operator'
            const newOperator = new Operator_User({
                country: req.body.country,
                name: req.body.name,
                organization: req.body.organization,
                email: req.body.email,
                password: req.body.password,
                task: req.body.task,
                avatar,
                status: 'unconfirmed',
                role
            });
            
            bcrypt.genSalt(10, (err, salt) => {
                if(err) console.error('There was an error', err);
                else {
                    bcrypt.hash(newOperator.password, salt, (err, hash) => {
                        if(err) console.error('There was an error', err);
                        else {
                            newOperator.password = hash;
                            newOperator
                                .save()
                                .then(user => {
                                    res.json(user)
                                }); 
                        }
                    });
                }
            });
        }
    });
});

router.post('/loginOperator', (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    Operator_User.findOne({email})
        .then(user => {
            if(!user) {
                errors.email = 'User not found'
                return res.status(404).json(errors);
            }
            else if(user.status === 'unconfirmed') {
                errors.status = 'Please, waite while NPC confirm your register'
                return res.status(404).json(errors);
            }
            else if(user.status === 'rejected') {
                errors.status = 'NPC has reject your register vote'
                return res.status(404).json(errors);
            }
            else if(user.status === 'confirmed') {
                bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const payload = {
                            id: user.id,
                            name: user.name,
                            avatar: user.avatar,
                            task: user.task,
                            role: user.role,
                            date: user.date,
                            country: user.country,
                            organization: user.organization,
                            email: user.email,
                        }
                        jwt.sign(payload, 'secret', {
                            expiresIn: 3600
                        }, (err, token) => {
                            if(err) console.error('There is some error in token', err);
                            else {
                                res.json({
                                    success: true,
                                    token: `Bearer ${token}`
                                });
                            }
                        });
                    }
                    else {
                        errors.password = 'Incorrect Password';
                        return res.status(400).json(errors);
                    }
                })
            }
        })
})

router.post('/edit', (req, res) => {editLogic(req, res)})

router.get('/fetch', (req, res) => {
    Operator_User.find({status: 'unconfirmed'}, '_id name status email')
    .then(operators => res.json(operators))
    .catch(err => console.log(err))  
})

router.post('/confirm', (req, res) => {
    Operator_User.findOneAndUpdate({_id: req.body._id}, {$set: {status: 'confirmed'}})
    .then(result => res.json(result))
    .catch(err => console.log(err))  
})

router.post('/reject', (req, res) => {
    Operator_User.findOneAndUpdate({_id: req.body._id}, {$set: {status: 'rejected'}})
    .then(result => res.json(result))
    .catch(err => console.log(err))  
})

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

module.exports = router;