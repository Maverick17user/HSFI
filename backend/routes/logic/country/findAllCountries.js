const express = require('express');
const Country = require('../../../models/Countries');

const findAllCountries = (req, res) => {
    Country.find({}, 'country')
    .then(countries => res.json(countries))
    .catch(err => console.log(err))
}

module.exports = findAllCountries
