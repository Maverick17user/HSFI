const validateReports = require('../../../validation/report/reports');

const validate = (req, res, next) => {
    const { errors, isValid } = validateReports(req.body);

    if(!isValid) {   
        return res.status(400).json(errors);
    }
    else {
        next()
    }
}

module.exports = validate