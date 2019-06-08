const validateRegisterInput = require('../../../validation/register/regManager')

const validationRegister = (req, res, next) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {   
        return res.status(400).json(errors);
    }
    else {
        next()
    }
}

module.exports = validationRegister