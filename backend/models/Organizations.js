const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Organizations_Schema = new Schema({
    organization: {
        type: String,
        required: true
    },
});

const Organization = mongoose.model('organizations', Organizations_Schema);

module.exports = Organization;