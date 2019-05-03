const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateScratchCardReg(data) {
    
    let errors = {};

    if(Validator.isEmpty(data.licNumber)) {
        errors.licNumber = 'License number is required';
    }

    if(Validator.isEmpty(data.cardsQuantity)) {
        errors.cardsQuantity = 'Quantity is required';
    }

    if(Validator.isEmpty(data.serialNumber)) {
        errors.serialNumber = "Serial card's number is required";
    }

    if(Validator.isEmpty(data.cardCost)) {
        errors.cardCost = 'Cost is required';
    }

    if(Validator.isEmpty(data.cardsQuantity)) {
        errors.cardsQuantity = 'Quantity is required';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}