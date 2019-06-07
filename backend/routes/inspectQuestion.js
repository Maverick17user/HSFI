const express = require('express');
const router = express.Router();

const validate = require('./logic/question/validate');
const addQuestion = require('./logic/question/addQuestion');
const deleteQuestion = require('./logic/question/deleteQuestion');
const getQuestion = require('./logic/question/getQuestion');

router
.post('/redactPanel/inspectionQuestions', validate, addQuestion)
.delete('/redactPanel/inspectionQuestions', validate, deleteQuestion)
.get('/redactPanel/inspectionQuestions', getQuestion)

module.exports = router;