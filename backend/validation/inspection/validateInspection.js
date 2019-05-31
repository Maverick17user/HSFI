const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateInspection(data) {
    
    let errors = {};
    const questionMarksData = data.questionsStatus
    
    if(!questionMarksData.every(question => {
        return question[Object.keys(question)[0]] !== ''
    })) 
    {
        errors.questions = 'Mark all questions in section above';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
