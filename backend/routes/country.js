const express = require('express');
const router = express.Router();

const validation = require('./logic/country/validatipn')
const addCountry = require('./logic/country/addCountry')
const removeCountry = require('./logic/country/removeCountry')
const findAllCountries = require('./logic/country/findAllCountries')

router
.post('/redactPanel/countryList', validation, addCountry)
.delete('/redactPanel/countryList', validation, removeCountry)
.get('/redactPanel/countryList', findAllCountries)

module.exports = router;
