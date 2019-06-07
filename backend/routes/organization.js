const express = require('express');
const router = express.Router();
const validate = require('./logic/organization/validate');
const addOrganization = require('./logic/organization/addOrganization');
const deleteOrganization = require('./logic/organization/deleteOrganization');
const getOrganizations = require('./logic/organization/getOrganizations');

router
.post('/redactPanel/organizationsList', validate, addOrganization)
.delete('/redactPanel/organizationsList', validate, deleteOrganization)
.get('/redactPanel/organizationsList', getOrganizations)

module.exports = router;