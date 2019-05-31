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
    }).then(scratchCardsData => {
        
        if(!scratchCardsData) {
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
                beenInspected: false
            });

            if(scratchCardsData.cardsQuantity == 0) {
                return res.status(400).json({
                    scratchCardserialNumber: "No cards. Please, create new scratch cards with new serial"
                });
            }
            const cardsQuantity = Number(scratchCardsData.cardsQuantity) - 1

            newLog.save()
            .then((log) => {
                ScratchCard.findOneAndUpdate(
                    {serialNumber: req.body.scratchCardserialNumber},
                    {$set: {cardsQuantity}}
                )
                .then(() => res.json(log))
            })
            .catch(err => {
                console.log('Save error => ' + err);
            })
        }
    });                              
})

module.exports = router;
