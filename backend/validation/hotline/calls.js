const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateHotline(data) {
    
    let errors = {};

    if(Validator.isEmpty(data.callerNationalID)) {
        errors.callerNationalID = 'National ID is required';
    }

    if(Validator.isEmpty(data.scratchCardserialNumber)) {
        errors.scratchCardserialNumber = 'Scratch card serial number is required';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}