const Question = require('../../../models/Questions');

const getQuestion = (req, res) => {
    Question.find({}, 'question')
    .then(questions => res.json(questions))
    .catch(err => {
        console.log(err);
    }) 
}

module.exports = getQuestion