const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateVenRegForm(data) {
    
    let errors = {};

    // const deepIsEmpty = (data, target, errMessage) => {
    //     data.forEach(unit => {
    //         switch (target) {
    //             case 'country':
    //                 if(!unit.country) {
    //                     errors.country = errMessage;
    //                 }
    //                 break;
    //             case ''
    //             default:
    //                 break;
    //         }
    //     })

    // deepIsEmpty(data.country, 'country', 'Country field is required')

    
    data.country.forEach(unit => {
        if(!unit.country) {
            errors.country = 'Country field is required';
        }
    });

    // if(Validator.isEmpty(data.venName)) {
    //     errors.venName = 'Vendor name is required';
    // }

    // if(Validator.isEmpty(data.licNumber)) {
    //     errors.licNumber = 'License number is required';
    // }

    // if(!Validator.isEmail(data.email)) {
    //     errors.email = 'E-mail is invalid';
    // }

    // if(Validator.isEmpty(data.email)) {
    //     errors.email = 'E-mail is required';
    // }

    // // deepIsEmpty(data.buisnessLocation, 'buisnessLocation',)
    // // deepIsEmpty(data.buisnessSchedule, 'buisnessSchedule',)
    // // deepIsEmpty(data.ingredientSource, 'ingredientSource',)

    // if(Validator.isEmpty(data.foodGroup)) {
    //     errors.foodGroup = 'Food group field is required';
    // }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}