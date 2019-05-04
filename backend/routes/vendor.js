const express = require('express');
const router = express.Router();

const Vendor = require('../models/Vendor');
const validateVenRegForm = require('../validation/venreg/regForm');

router.post('/venRegistration', function(req, res) {

    const { errors, isValid } = validateVenRegForm(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    
    Vendor.findOne({
        licNumber: req.body.licNumber
    }).then(licNumber => {
        if(licNumber) {
            return res.status(400).json({
                licNumber: 'Vendor with this license already exists'
            });
        }
        else {
            const newVendor = new Vendor({
                operatorName: req.body.operatorName,
                regDate: req.body.regDate,
                country: req.body.country,
                venName: req.body.venName,
                venPhotoURL: req.body.venPhotoURL,
                licNumber: req.body.licNumber,
                licScanURL: req.body.licScanURL,
                phone: req.body.phone,
                email: req.body.email,
                buisnessLocation: req.body.buisnessLocation,
                buisnessSchedule: req.body.buisnessSchedule,
                ingredientSource: req.body.ingredientSource,
                foodGroup: req.body.foodGroup
            });
            newVendor.save()
                .then(ven => {
                    console.log(req.body.venName + ' added!');
                    res.json(ven)
                })
                .catch(err => {
                    console.log(err);
                })                                    
        }
    });
});

// TODO: Make it as get request
router.post('/getVendor', function(req, res) {

    Vendor.findOne({licNumber: req.body.vendorNumber})
    .then(data => {
        if(!data) {
            return res.status(400).json({
                licNumber: 'Vendor with this license not found'
            });
        } else {
            res.json(data)
        }
    })
    .catch(err => console.log(err))  
})

// TODO: Make it as get request
router.get('/getAllVendors', function(req, res) {

    Vendor.find({})
    .then(data => res.json(data))
    .catch(err => console.log(err))  
})

module.exports = router;