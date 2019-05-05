const express = require('express');
const router = express.Router();

const ScratchCard = require('../models/ScratchCard');
const CallLog = require('../models/CallLog');
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
                foodGroup: req.body.foodGroup,
                flagStatus: '',
                hasBeenFlagged: false,
                oss: '',
                isOpen: true,
                gps: '',
                stars: ''
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

router.get('/getAllVendors', function(req, res) {

    Vendor.find({})
    .then(data => res.json(data))
    .catch(err => console.log(err))  
})

router.put('/changeFlagState', function(req, res) {
    const callData = req.body

    // Find card that was called 
    ScratchCard.findOne({serialNumber: callData.scratchCardserialNumber})
    .then(scdata => {

        // Find all call logs for this card's serial number
        CallLog.find({
            scratchCardserialNumber: scdata.serialNumber
        }).then(callLogs => {

            // Get original call logs by callerID
            const originalCallLogs = getCallLogs_ByOriginalIDs(callLogs)
            let flagStatus, hasBeenFlagged
            
            // Change vendor's flag
            if (originalCallLogs.length === 1 || originalCallLogs.length === 2) {
                flagStatus = "is flagged"
            }
            else if (originalCallLogs.length === 3) {
                flagStatus = "red flagged"
                hasBeenFlagged = true
            }
            
            // Find user and change his flag status
            Vendor.findOneAndUpdate(
                {licNumber: scdata.licNumber}, 
                {flagStatus, hasBeenFlagged}
            )

        })
    })
    .catch(err => console.log(err))
    
    // Service functions
    const getCallLogs_ByOriginalIDs = logs => {
        return [...new Set(removeDuplicates(logs, "callerNationalID"))];
    }
    
    const removeDuplicates = (data, param) => {
        return data.filter(function (item, pos, array) {
            return array.map(function (mapItem) { 
                return mapItem[param]; 
            }).indexOf(item[param]) === pos;
        })
    }
})

module.exports = router;
