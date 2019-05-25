const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../validation/register/regManager');
const validateLoginInput = require('../validation/login');

const Manager_User = require('../models/Manager_User');

router.post('/registerManager', function(req, res) {

    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    Manager_User.findOne({
        email: req.body.email
    }).then(user => {
        if(user) {
            return res.status(400).json({
                email: 'User with this email already exists'
            });
        }
        else {
            const avatar = gravatar.url(req.body.email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });
            const role = 'manager'
            const newManager = new Manager_User({
                name: req.body.name,
                office: req.body.office,
                phone: req.body.phone,
                email: req.body.email,
                password: req.body.password,
                avatar,
                role
            });
            
            bcrypt.genSalt(10, (err, salt) => {
                if(err) console.error('There was an error', err);
                else {
                    bcrypt.hash(newManager.password, salt, (err, hash) => {
                        if(err) console.error('There was an error', err);
                        else {
                            newManager.password = hash;
                            newManager
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

router.post('/loginManager', (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    Manager_User.findOne({email})
        .then(user => {
            if(!user) {
                errors.email = 'User not found'
                return res.status(404).json(errors);
            }
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
        });
});

router.post('/edit', (req, res) => {
    // const { errors, isValid } = validateEdit(req.body);

    // if(!isValid) {
    //     return res.status(400).json(errors);
    // }

    const {data} = req.body
    const {
        name, email, country, phone, password_cur, password
    } = data
    const currentUser = req.body.user
    const userID = currentUser.id
    const dataForNewObject = [{name}, {email}, {country}, {phone}, {password}]

    Manager_User.findOne({_id: userID})
    .then(foundedUser => {
        // if(foundedUser.email === email) {
        //     errors.email = 'User with this email already exists';
        //     return res.status(400).json(errors);
        // }

        // if(foundedUser.name === name) {
        //     errors.email = 'User with this name already exists';
        //     return res.status(400).json(errors);
        // }

        bcrypt.compare(password_cur, foundedUser.password)
        .then(isMatch => {
            if(isMatch) {
                const validData = dataForNewObject.filter(unit => Object.values(unit)[0])
                let editedData = Object.assign({}, ...validData)

                if(editedData.password) {
                    bcrypt.genSalt(10, (err, salt) => {
                        if(err) console.error('There was an error', err);
                        else {
                            bcrypt.hash(password, salt, (err, hash) => {
                                if(err) console.error('There was an error', err);
                                else {
                                    editedData.password = hash
                                    saveInDB(editedData ,userID)
                                }
                            });
                        }
                    })
                }
                else {
                    saveInDB(editedData ,userID)
                }
            }
            // else {
            //     errors.password = 'Incorrect current password';
            //     return res.status(400).json(errors);
            // }
        });
    })
    .catch(err => console.log(err))

    const saveInDB = (data, id) => {
        Manager_User.findOneAndUpdate(
            {_id: id}, 
            {$set: data}
        )
        .then(user => res.json(user))
    }
})

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
    });
});

module.exports = router;