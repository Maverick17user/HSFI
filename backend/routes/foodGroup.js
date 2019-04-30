const express = require('express');
const router = express.Router();

const FoodGroup = require('../models/FoodGroups');
const validateFoodGroups = require('../validation/homePanel/foodGroups');

router.post('/redactPanel/foodGroups', function(req, res) {
    const { errors, isValid } = validateFoodGroups(req.body);

    if(!isValid) {   
        return res.status(400).json(errors);
    }

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
});

router.delete('/redactPanel/foodGroups', function(req, res) {
    
    const { errors, isValid } = validateFoodGroups(req.body);
    
    if(!isValid) {
        return res.status(400).json(errors);
    }

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
});

router.get('/redactPanel/foodGroups', function(req, res) {
    FoodGroup.find({}, 'foodGroup')
    .then(foodGroups => res.json(foodGroups))
    .catch(err => {
        console.log(err);
    })  
});

module.exports = router;