const express = require('express');
const FoodGroup = require('../../../models/FoodGroups');

const deleteFoodGroup = (req, res) => {
    FoodGroup.findOne({
        foodGroup: req.body.foodGroup
    }).then(foodGroup => {
        if(!foodGroup) {
            return res.status(400).json({
                foodGroup: 'Food group not found'
            });
        }
        else {
            FoodGroup.deleteOne({foodGroup: req.body.foodGroup})
            .then(() => {
                console.log(req.body.foodGroup + ' removed!');
                res.json(req.body.foodGroup)
            })
            .catch(err => {
                console.log(err);
            })                                    
        }
    });
}

module.exports = deleteFoodGroup