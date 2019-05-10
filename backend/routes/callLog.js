const express = require('express');
const router = express.Router();

const ScratchCard = require('../models/ScratchCard');
const CallLog = require('../models/CallLog');

const validateHotline = require('../validation/hotline/calls')

router.post('/hotline', function(req, res) {

    const { errors, isValid } = validateHotline(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    ScratchCard.findOne({
        serialNumber: req.body.scratchCardserialNumber
    }).then(scratchCardserialNumber => {
        if(!scratchCardserialNumber) {
            return res.status(400).json({
                scratchCardserialNumber: "Unexistance scratch card's serial number"
            });
        }
        else {

            const newLog = new CallLog({
                operatorName: req.body.operatorName,
                callDate: req.body.callDate,
                callerNationalID: req.body.callerNationalID,
                scratchCardserialNumber: req.body.scratchCardserialNumber,
            });

            newLog.save()
            .then(log => {
                console.log('This log added!');
                res.json(log)
            })
            .catch(err => {
                console.log('Save error => ' + err);
            })
        }
    });                              
})

module.exports = router;
