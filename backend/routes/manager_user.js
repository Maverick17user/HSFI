const express = require('express');
const router = express.Router();
const passport = require('passport');
const validationRegister = require('./logic/manager/validationRegister')
const validationLogIn = require('./logic/manager/validationLogIn')
const dataBuild = require('./logic/manager/dataBuild')
const cryptingAndRegister = require('./logic/manager/cryptingAndRegister')
const logIn = require('./logic/manager/logIn')
const editLogic = require('./logic/edit')

router
.post('/registerManager', validationRegister, dataBuild, cryptingAndRegister)
.post('/loginManager', validationLogIn, logIn)
.post('/edit', editLogic)
.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
    });
});

module.exports = router;