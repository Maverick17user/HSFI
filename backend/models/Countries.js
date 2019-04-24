const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Countries_Schema = new Schema({
    country: {
        type: String,
        required: true
    },
});

const Country = mongoose.model('countries', Countries_Schema);

module.exports = Country;