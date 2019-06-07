const Question = require('../../../models/Questions');

const addQuestion = (req, res) => {
    Question.findOne({
        question: req.body.question
    }).then(question => {
        if(question) {
            return res.status(400).json({
                question: 'Food group already exists'
            });
        }
        else {
            const newquestion = new Question({
                question: req.body.question,
            });
            newquestion.save()
            .then(question => {
                console.log(req.body.question + ' added!');
                res.json(question)
            })
            .catch(err => {
                console.log(err);
            })                                    
        }
    });
}

module.exports = addQuestion