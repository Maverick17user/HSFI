const express = require('express');
const router = express.Router();

const validate = require('./logic/callLog/validate')
const findScratchCard = require('./logic/callLog/findScratchCard')
const createCallLog = require('./logic/callLog/createCallLog')
const updateScratchCard = require('./logic/callLog/updateScratchCard')

router.post('/hotline', validate, findScratchCard, createCallLog, updateScratchCard)

module.exports = router;
