const express = require('express');
const router = express.Router();

const Country = require('../models/Countries');
const validateCountries = require('../validation/homePanel/countries');

router.post('/redactPanel/countryList', function(req, res) {
    const { errors, isValid } = validateCountries(req.body);

    if(!isValid) {   
        return res.status(400).json(errors);
    }

    Country.findOne({
        country: req.body.country
    }).then(country => {
        if(country) {
            return res.status(400).json({
                country: 'Country already exists'
            });
        }
        else {
            const newCountry = new Country({
                country: req.body.country,
            });
            newCountry.save()
                .then(country => {
                    console.log(req.body.country + ' added!');
                    res.json(country)
                })
                .catch(err => {
                    console.log(err);
                })                                    
        }
    });
});

router.delete('/redactPanel/countryList', function(req, res) {
    // console.log('|');
    // console.log(req.body);
    
    const { errors, isValid } = validateCountries(req.body);
    
    if(!isValid) {
        return res.status(400).json(errors);
    }

    Country.findOne({
        country: req.body.country
    }).then(country => {
        if(!country) {
            return res.status(400).json({
                country: 'Country not found'
            });
        }
        else {
            Country.deleteOne({country: req.body.country})
                .then(() => {
                    console.log(req.body.country + ' removed!');
                    res.json(req.body.country)
                })
                .catch(err => {
                    console.log(err);
                })                                    
        }
    });
});

router.get('/redactPanel/countryList', function(req, res) {
    Country.find({}, 'country')
    .then(countries => res.json(countries))
    .catch(err => {
        console.log(err);
    })  
});

module.exports = router;