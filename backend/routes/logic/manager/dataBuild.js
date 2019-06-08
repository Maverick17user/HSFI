const Manager_User = require('../../../models/Manager_User');
const gravatar = require('gravatar');

const dataBuild = (req, res, next) => {
    Manager_User.findOne({
        email: req.body.email
    })
    .then(user => {
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

            req.newManager = newManager
            next()
        }
    })
}

module.exports = dataBuild