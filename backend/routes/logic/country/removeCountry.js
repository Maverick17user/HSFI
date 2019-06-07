const express = require('express');
const Country = require('../../../models/Countries');

const removeCountry = (req, res) => {
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
}

module.exports = removeCountry