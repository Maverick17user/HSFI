const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateVenRegForm(data) {
    
    let errors = {};
    
    data.country.forEach(unit => {
        if(!unit.country) {
            errors.country = 'Country field is required';
        }
    });

    if(Validator.isEmpty(data.venName)) {
        errors.venName = 'Vendor name is required';
    }

    if(Validator.isEmpty(data.licNumber)) {
        errors.licNumber = 'License number is required';
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = 'E-mail is invalid';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'E-mail is required';
    }
    
    const isFilledLoc = data.buisnessLocation.every(locUnit => {
        return locUnit.city && locUnit.street && locUnit.objNumber
    })

    const isFilledShedule = data.buisnessSchedule.every(sheduleUnit => {
        return sheduleUnit.day && sheduleUnit.from && sheduleUnit.to
    })

    const isFilledIngredientSource = data.ingredientSource.every(sourceUnit => {
        return typeof sourceUnit.source !== "undefined" && sourceUnit.source !== ''
    })

    if(!isFilledLoc) {
        errors.buisnessLocation = 'Each input in this group is required';
    }


    if(!isFilledShedule) {
        errors.buisnessSchedule = 'Each input in this group is required';
    }


    if(!isFilledIngredientSource) {
        errors.ingredientSource = 'Each input in this group is required';
    }

    if(Validator.isEmpty(data.foodGroup)) {
        errors.foodGroup = 'Food group field is required';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}