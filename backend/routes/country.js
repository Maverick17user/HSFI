const express = require('express');
const router = express.Router();

const Country = require('../models/Countries');

router.post('/addCountry', function(req, res) {

    // const { errors, isValid } = validateRegisterInput(req.body);

    // if(!isValid) {
    //     return res.status(400).json(errors);
    // }

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
                    res.json(country)
                });                                    
        }
    });
});