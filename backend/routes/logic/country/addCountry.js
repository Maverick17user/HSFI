const express = require('express');
const Country = require('../../../models/Countries');

const addCountry = (req, res) => {
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
}

module.exports = addCountry