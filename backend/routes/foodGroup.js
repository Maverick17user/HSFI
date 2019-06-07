const express = require('express');
const router = express.Router();
const validate = require('./logic/foodGroup/validate')
const addFoodGroup = require('./logic/foodGroup/addFoodGroup')
const deleteFoodGroup = require('./logic/foodGroup/deleteFoodGroup')
const getFoodGroups = require('./logic/foodGroup/getFoodGroups')

router
.post('/redactPanel/foodGroups', validate, addFoodGroup)
.delete('/redactPanel/foodGroups', validate, deleteFoodGroup)
.get('/redactPanel/foodGroups', getFoodGroups)

module.exports = router;