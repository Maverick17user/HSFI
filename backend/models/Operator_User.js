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
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Operator_User = mongoose.model('Operator_users', Operator_UserSchema);

module.exports = Operator_User;