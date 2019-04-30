const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateFoodGroups(data) {
    
    let errors = {};
    data.foodGroup = isEmpty(data.foodGroup) ? '' : data.foodGroup;

    if(Validator.isEmpty(data.foodGroup)) {
        errors.foodGroup = 'Food group input is required';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}