const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../validation/register/regNPC');
const validateLoginInput = require('../validation/login');
const editLogic = require('./logic/edit')

const NPC_User = require('../models/NPC_User');

router.post('/register', function(req, res) {
    
    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    NPC_User.findOne({
        email: req.body.email
    }).then(user => {
        if(user) {
            return res.status(400).json({
                email: 'Email already used'
            });
        }
        else {
            const avatar = gravatar.url(req.body.email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });
            const role = 'npc'
            const newNPC = new NPC_User({
                country: req.body.country,
                name: req.body.name,
                organization: req.body.organization,
                mailingAdress: req.body.mailingAdress,
                phone: req.body.phone,
                email: req.body.email,
                password: req.body.password,
                avatar,
                status: 'unconfirmed', 
                role
            });    
            
            bcrypt.genSalt(10, (err, salt) => {
                if(err) console.error('There was an error', err);
                else {
                    bcrypt.hash(newNPC.password, salt, (err, hash) => {
                        if(err) console.error('There was an error', err);
                        else {
                            newNPC.password = hash;
                            newNPC
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

router.post('/login', (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    NPC_User.findOne({email})
    .then(user => { 
        if(!user) {
            errors.email = 'User not found'
            return res.status(404).json(errors);
        }
        else if(user.status === 'unconfirmed') {
            errors.status = 'Please, waite while manager confirm your register'
            return res.status(404).json(errors);
        }
        else if(user.status === 'rejected') {
            errors.status = 'Manager has reject your register vote'
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
                        role: user.role,
                        date: user.date,
                        phone: user.phone,
                        email: user.email,
                        organization: user.organization,
                        country: user.country
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
            });
        }
    });
});

router.post('/edit', (req, res) => {editLogic(req, res)})

router.get('/fetch', (req, res) => {
    NPC_User.find({status: 'unconfirmed'}, '_id name status email')
    .then(npcs => res.json(npcs))
    .catch(err => console.log(err))  
})

router.post('/confirm', (req, res) => {
    NPC_User.findOneAndUpdate({_id: req.body._id}, {$set: {status: 'confirmed'}})
    .then(result => res.json(result))
    .catch(err => console.log(err))  
})

router.post('/reject', (req, res) => {
    NPC_User.findOneAndUpdate({_id: req.body._id}, {$set: {status: 'rejected'}})
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