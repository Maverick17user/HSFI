const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NPC_UserSchema = new Schema({
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
    mailingAdress: {
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

const NPC_User = mongoose.model('NPC_users', NPC_UserSchema);

module.exports = NPC_User;