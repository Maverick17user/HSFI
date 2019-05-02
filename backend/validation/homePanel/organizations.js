const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateOrganizations(data) {
    
    let errors = {};

    if(Validator.isEmpty(data.organization)) {
        errors.organization = 'Organization input is required';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}