const express = require('express');
const validateFoodGroups = require('../../../validation/homePanel/foodGroups');

const validate = (req, res, next) => {
    const { errors, isValid } = validateFoodGroups(req.body);

    if(!isValid) {   
        return res.status(400).json(errors);
    }
    else {
        next()
    }
}

module.exports = validate