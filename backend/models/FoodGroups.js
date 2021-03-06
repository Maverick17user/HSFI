const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodGroups_Schema = new Schema({
    foodGroup: {
        type: String,
        required: true
    },
});

const FoodGroup = mongoose.model('foodGroups', FoodGroups_Schema);

module.exports = FoodGroup;