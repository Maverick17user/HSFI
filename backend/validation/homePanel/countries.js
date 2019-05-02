const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateCountries(data) {
    
    let errors = {};

    if(Validator.isEmpty(data.country)) {
        errors.country = 'Country input is required';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}