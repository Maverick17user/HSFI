const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Questions_Schema = new Schema({
    question: {
        type: String,
        required: true
    },
});

const Question = mongoose.model('questions', Questions_Schema);

module.exports = Question;