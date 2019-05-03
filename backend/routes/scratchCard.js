const express = require('express');
const router = express.Router();

const ScratchCard = require('../models/ScratchCard');
const validateScratchCardReg = require('../validation/scratchCard/scratchCards')

router.post('/venScratchCards', function(req, res) {
    const { errors, isValid } = validateScratchCardReg(req.body);

    if(!isValid) {   
        return res.status(400).json(errors);
    }

    ScratchCard.findOne({
        serialNumber: req.body.serialNumber
    }).then(serialNumber => {
        if(serialNumber) {
            return res.status(400).json({
                serialNumber: 'Scratch cards with this serial number already exists'
            });
        }
        else {
            const newCard = new ScratchCard({
                operatorName: req.body.operatorName,
                transactionDate: req.body.transactionDate,
                licNumber: req.body.licNumber,
                venName: req.body.venName,
                venPhotoURL: req.body.venPhotoURL,
                foodGroup: req.body.foodGroup,
                cardsQuantity: req.body.cardsQuantity,
                serialNumber: req.body.serialNumber,
                cardCost: req.body.cardCost,
                currency: req.body.currency,
                totalCost: req.body.totalCost
            });
            newCard.save()
                .then(card => {
                    console.log(req.body.serialNumber + ' added!');
                    res.json(card)
                })
                .catch(err => {
                    console.log(err);
                })                                    
        }
    });
});

module.exports = router;