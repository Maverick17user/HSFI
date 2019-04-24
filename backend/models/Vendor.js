const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vendor_Schema = new Schema({
    operatorName: {
        type: String,
        required: true
    },
    regDate: {
        type: String,
        required: true
    },
    country: {
        type: Array,
        required: true
    },
    venName: {
        type: String,
        required: true
    },
    venPhotoURL: {
        type: String,
        required: true
    },
    licNumber: {
        type: String,
        required: true
    },
    licScanURL: {
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
    buisnessLocation: {
        type: Array,
        required: true
    },
    buisnessSchedule: {
        type: Array,
        required: true
    },
    ingredientSource: {
        type: Array,
        required: true
    },
    foodGroup: {
        type: String,
        required: true
    }
});

const Vendor = mongoose.model('vendors', Vendor_Schema);

module.exports = Vendor;