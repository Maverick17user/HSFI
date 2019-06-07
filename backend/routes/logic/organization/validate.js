const validateOrganizations = require('../../../validation/homePanel/organizations.js')

const validate = (req, res, next) => {
    const { errors, isValid } = validateOrganizations(req.body);

    if(!isValid) {   
        return res.status(400).json(errors);
    }
    else {
        next()
    }
}

module.exports = validate