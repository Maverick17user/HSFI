const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InspectionSchema = new Schema({
    operatorName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    licNum: {
        type: String,
        required: true
    },
    vendorName: {
        type: String,
        required: true
    },
    vendorPhoto: {
        type: String,
        required: true
    },
    foodGroup: {
        type: String,
        required: true
    },
    questionsStatus: {
        type: Array,
        required: true
    },
    totalOSS: {
        type: Number,
        required: true
    },
    
});

const Inspection = mongoose.model('inspections', InspectionSchema);

module.exports = Inspection;