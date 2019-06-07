const express = require('express')
const validateCountries = require('../../../validation/homePanel/countries')

const validation = (req, res, next) => {
    const { errors, isValid } = validateCountries(req.body);

    if(!isValid) {   
        return res.status(400).json(errors);
    }
    else {
        next()
    }
}

module.exports = validation