const Validator = require('validator');
const isEmpty = require('../is-empty');
const parseDate = require('../../routes/logic/report/parseDate')

module.exports = function validateReports(data) {
    let errors = {};
    
    const dateFrom = new Date(parseDate(data.from))
    const dateTo = new Date(parseDate(data.to))

    if(Validator.isEmpty(data.from)) {
        errors.from = 'Date from field is required'
    }

    if(Validator.isEmpty(data.to)) {
        errors.to = 'Date to field is required'
    }

    if(dateFrom > dateTo) {
        errors.date = "Date from value later then date to"
    }

    if(data.countries.length === 0) {
        errors.countries = 'Country field is required'
    }

    if(!data.reportQueries.some(query => {
        return query[1] == true
    })) 
    {
        errors.reportQueries = 'Mark at least one query above';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
