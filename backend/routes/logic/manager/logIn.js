const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Manager_User = require('../../../models/Manager_User');

const logIn = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const errors = req.errors

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
}

module.exports = logIn