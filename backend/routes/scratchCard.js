const express = require('express');
const router = express.Router();
const validate = require('./logic/scratchCard/validate')
const createCards = require('./logic/scratchCard/createCards')

router.post('/venScratchCards', validate, createCards)

module.exports = router;