const Question = require('../../../models/Questions');

const deleteQuestion = (req, res) => {
    Question.findOne({
        question: req.body.question
    }).then(question => {
        if(!question) {
            return res.status(400).json({
                question: 'Question not found'
            });
        }
        else {
            Question.deleteOne({question: req.body.question})
            .then(() => {
                console.log(req.body.question + ' removed!');
                res.json(req.body.question)
            })
            .catch(err => {
                console.log(err);
            })                                    
        }
    });
}

module.exports = deleteQuestion