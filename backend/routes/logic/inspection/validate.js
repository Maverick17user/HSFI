const validateInspection = require('../../../validation/inspection/validateInspection')

const validate = (req, res, next) => {
    const { errors, isValid } = validateInspection(req.body);

    if(!isValid) {   
        return res.status(400).json(errors);
    }
    else {
        next()
    }
}

module.exports = validate