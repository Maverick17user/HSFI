const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateCountries(data) {
    
    let errors = {};
    data.country = isEmpty(data.country) ? '' : data.country;

    // console.log('val');
    // console.log(data);
    // console.log(data.country === '');

    if(Validator.isEmpty(data.country)) {
        // console.log("inside");
        // console.log(data.country === '');
        errors.country = 'Country is required';
        // console.log(errors.country);
    }
    
    // console.log(errors);
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}