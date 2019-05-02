const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateInspectionQuestions(data) {
    
    let errors = {};

    if(Validator.isEmpty(data.question)) {
        errors.question = 'Question input is required';
    }

    else if(data.question.charAt(data.question.length-1) !== "?") {
        errors.question = 'You forgotten "?" at the end of string';
    }

    else if((data.question.split("?").length-1) > 1) {
        errors.question = 'Question should contains only one "?" symbol at te end';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}