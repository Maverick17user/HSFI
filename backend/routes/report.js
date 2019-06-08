const express = require('express')
const router = express.Router()
const validate = require('./logic/report/validate')
const prepareData = require('./logic/report/prepareData')
const createFileData = require('./logic/report/createFileData')

router.post('/createFileData', validate, prepareData, createFileData)

module.exports = router;

