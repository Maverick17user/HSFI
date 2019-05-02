const express = require('express');
const router = express.Router();

const Question = require('../models/Questions');
const validateInspectionQuestions = require('../validation/homePanel/questions');

router.post('/redactPanel/inspectionQuestions', function(req, res) {
    const { errors, isValid } = validateInspectionQuestions(req.body);

    if(!isValid) {   
        return res.status(400).json(errors);
    }

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
});

router.delete('/redactPanel/inspectionQuestions', function(req, res) {
    
    const { errors, isValid } = validateInspectionQuestions(req.body);
    
    if(!isValid) {
        return res.status(400).json(errors);
    }

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
});

router.get('/redactPanel/inspectionQuestions', function(req, res) {
    Question.find({}, 'question')
    .then(questions => res.json(questions))
    .catch(err => {
        console.log(err);
    })  
});

module.exports = router;