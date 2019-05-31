const express = require('express');
const router = express.Router();

const Inspection = require('../models/Inspection');
const Vendor = require('../models/Vendor');
const CallLog = require('../models/CallLog');
const ScratchCard = require('../models/ScratchCard');
const validateInspection = require('../validation/inspection/validateInspection')

router.post('/submit', function(req, res) {
    
    const { errors, isValid } = validateInspection(req.body);

    if(!isValid) {   
        return res.status(400).json(errors);
    }

    const inspectionData = req.body

    // Mark old callLogs for vendor as used in inspection
    ScratchCard.findOne({licNumber: inspectionData.licNum})
    .then(scard => {
        CallLog.updateMany(
            {scratchCardserialNumber: scard.serialNumber, beenInspected: false},
            {$set: {beenInspected: true}}
        )
        .then(() => {
            // Update vendor staus and stars count

            Vendor.findOne({licNumber: inspectionData.licNum})
            .then(vendor => {
                let stars, flagStatus

                if (inspectionData.totalOSS >= 0) {
                    stars = vendor.stars + 1
                    flagStatus = 'inspected'
                } 
                else {
                    stars = vendor.stars - 1
                    flagStatus = vendor.flagStatus
                }
    
                Vendor.findOneAndUpdate(
                    {licNumber: inspectionData.licNum},
                    {$set:{stars, flagStatus, oss: inspectionData.totalOSS}})
                .then(() => {
                    // Save inspection data in DB
                    const inspectionLog = new Inspection(inspectionData);

                    inspectionLog.save()
                    .then(() => res.status(200).json("saved"))
                    .catch(err => console.log(err))  
                })
            })
        })
    })
    .catch(err => console.log(err))                                 
});

module.exports = router;