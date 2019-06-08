const express = require('express');
const router = express.Router();
const validate = require('./logic/inspection/validate')
const markCallLogs = require('./logic/inspection/markCallLogs')
const updateVendor = require('./logic/inspection/updateVendor')
const saveInspection = require('./logic/inspection/saveInspection')

router.post('/submit', validate, markCallLogs, updateVendor, saveInspection)

module.exports = router;