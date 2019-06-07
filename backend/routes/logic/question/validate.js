const validateInspectionQuestions = require('../../../validation/homePanel/questions');

const validate = (req, res, next) => {
    const { errors, isValid } = validateInspectionQuestions(req.body);

    if(!isValid) {   
        return res.status(400).json(errors);
    }
    else {
        next()
    }
}

module.exports = validate