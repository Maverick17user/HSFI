const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vendor_Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    office: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String
    }
});

const Vendor = mongoose.model('vendors', Vendor_Schema);

module.exports = Vendor;