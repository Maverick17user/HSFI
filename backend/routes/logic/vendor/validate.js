const validateVenRegForm = require('../../../validation/venreg/regForm');

const validate = (req, res, next) => {
    const { errors, isValid } = validateVenRegForm(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    else {
        next()
    }
}

module.exports = validate