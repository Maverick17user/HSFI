const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateEdit(data) {
    let errors = {};
    
    if(!Validator.isEmail(data.email) && data.email.length > 0) {
        errors.email = 'Email is invalid';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30}) && data.password.length > 0) {
        errors.password = 'Password must have 6 chars';
    }

    if(!Validator.isLength(data.password_cur, {min: 6, max: 30})) {
        errors.password_cur = 'Password must have at list 6 chars';
    }

    if(Validator.isEmpty(data.password_cur)) {
        errors.password_cur = 'Current password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}