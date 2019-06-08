const ScratchCard = require('../../../models/ScratchCard');

const findScratchCard = (req, res, next) => {
    ScratchCard.findOne({
        serialNumber: req.body.scratchCardserialNumber
    })
    .then(scratchCardsData => {
        if(!scratchCardsData) {
            return res.status(400).json({
                scratchCardserialNumber: "Unexistance scratch card's serial number"
            })
        }
        else if(scratchCardsData.cardsQuantity == 0) {
            return res.status(400).json({
                scratchCardserialNumber: "No cards. Please, create new scratch cards with new serial"
            });
        }
        else {
            req.scratchCardsData = scratchCardsData
            next()
        }
    })
    .catch(err => {
        console.log('Save error => ' + err);
    })
}

module.exports = findScratchCard