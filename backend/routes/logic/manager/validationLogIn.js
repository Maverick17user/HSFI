const validateLoginInput = require('../../../validation/login')

const validationLogIn = (req, res, next) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {   
        return res.status(400).json(errors);
    }
    else {
        req.errors = errors
        next()
    }
}

module.exports = validationLogIn