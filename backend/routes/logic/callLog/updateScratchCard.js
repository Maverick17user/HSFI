const ScratchCard = require('../../../models/ScratchCard');

const updateScratchCard = (req, res) => {
    const cardsQuantity = req.cardsQuantity
    const log = req.log

    ScratchCard.findOneAndUpdate(
        {serialNumber: req.body.scratchCardserialNumber},
        {$set: {cardsQuantity}}
    )
    .then(() => res.json(log))
}

module.exports = updateScratchCard