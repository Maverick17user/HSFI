const express = require('express');
const router = express.Router();

const validate = require('./logic/vendor/validate')
const registerVendor = require('./logic/vendor/registerVendor')
const getVendorsByLicenseNumber = require('./logic/vendor/getVendorsByLicenseNumber')
const getAllVendors = require('./logic/vendor/getAllVendors')
const findScratchCard = require('./logic/vendor/findScratchCard')
const filterCallLogs = require('./logic/vendor/filterCallLogs')
const changeFlagStatus = require('./logic/vendor/changeFlagStatus')
const saveChanges = require('./logic/vendor/saveChanges')

router
.post('/venRegistration', validate, registerVendor)
.post('/getVendor', getVendorsByLicenseNumber)
.get('/getAllVendors', getAllVendors)
.put('/changeFlagState', findScratchCard, filterCallLogs, changeFlagStatus, saveChanges)

module.exports = router;
