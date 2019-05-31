const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CallLogs_Schema = new Schema({
    operatorName: {
        type: String,
        required: true
    },
    callDate: {
        type: String,
        required: true
    },
    callerNationalID: {
        type: String,
        required: true
    },
    scratchCardserialNumber: {
        type: String,
        required: true
    },
    beenInspected: {
        type: Boolean,
        required: true
    }
});

const CallLog = mongoose.model('call_logs', CallLogs_Schema);

module.exports = CallLog;