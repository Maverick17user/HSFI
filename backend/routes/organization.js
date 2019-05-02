const express = require('express');
const router = express.Router();

const Organization = require('../models/Organizations');
const validateOrganizations = require('../validation/homePanel/organizations');

router.post('/redactPanel/organizationsList', function(req, res) {
    const { errors, isValid } = validateOrganizations(req.body);

    if(!isValid) {   
        return res.status(400).json(errors);
    }

    Organization.findOne({
        organization: req.body.organization
    }).then(organization => {
        if(organization) {
            return res.status(400).json({
                organization: 'Food group already exists'
            });
        }
        else {
            const neworganization = new Organization({
                organization: req.body.organization,
            });
            neworganization.save()
            .then(organization => {
                console.log(req.body.organization + ' added!');
                res.json(organization)
            })
            .catch(err => {
                console.log(err);
            })                                    
        }
    });
});

router.delete('/redactPanel/organizationsList', function(req, res) {
    
    const { errors, isValid } = validateOrganizations(req.body);
    
    if(!isValid) {
        return res.status(400).json(errors);
    }

    Organization.findOne({
        organization: req.body.organization
    }).then(organization => {
        if(!organization) {
            return res.status(400).json({
                organization: 'Organization not found'
            });
        }
        else {
            Organization.deleteOne({organization: req.body.organization})
            .then(() => {
                console.log(req.body.organization + ' removed!');
                res.json(req.body.organization)
            })
            .catch(err => {
                console.log(err);
            })                                    
        }
    });
});

router.get('/redactPanel/organizationsList', function(req, res) {
    Organization.find({}, 'organization')
    .then(organizations => res.json(organizations))
    .catch(err => {
        console.log(err);
    })  
});

module.exports = router;