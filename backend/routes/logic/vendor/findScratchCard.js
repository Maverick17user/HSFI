const ScratchCard = require('../../../models/ScratchCard');

const findScratchCard = (req, res, next) => {
    const callData = req.body

    ScratchCard.findOne({serialNumber: callData.scratchCardserialNumber})
    .then(scdata => {
        if (scdata) {
            req.scdata = scdata
            next(); 
        }
    })
    .catch(err => console.log(err))
}

module.exports = findScratchCard

