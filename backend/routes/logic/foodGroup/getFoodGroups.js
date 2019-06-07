const express = require('express');
const FoodGroup = require('../../../models/FoodGroups');

const getFoodGroups = (req, res) => {
    FoodGroup.find({}, 'foodGroup')
    .then(foodGroups => res.json(foodGroups))
    .catch(err => {
        console.log(err);
    })
}

module.exports = getFoodGroups