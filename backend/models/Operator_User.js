const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Operator_UserSchema = new Schema({
    country: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    task: {
        type: Array,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

const Operator_User = mongoose.model('Operator_users', Operator_UserSchema);

module.exports = Operator_User;