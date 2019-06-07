const express = require('express');
const FoodGroup = require('../../../models/FoodGroups');

const addFoodGroup = (req, res) => {
    FoodGroup.findOne({
        foodGroup: req.body.foodGroup
    }).then(foodGroup => {
        if(foodGroup) {
            return res.status(400).json({
                foodGroup: 'Food group already exists'
            });
        }
        else {
            const newFoodGroup = new FoodGroup({
                foodGroup: req.body.foodGroup,
            });
            newFoodGroup.save()
            .then(foodGroup => {
                console.log(req.body.foodGroup + ' added!');
                res.json(foodGroup)
            })
            .catch(err => {
                console.log(err);
            })                                    
        }
    });
}

module.exports = addFoodGroup