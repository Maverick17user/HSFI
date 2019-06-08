const CallLog = require('../../../models/CallLog');
const ScratchCard = require('../../../models/ScratchCard');

const markCallLogs = (req, res, next) => { 
    const inspectionData = req.body

    // Mark old callLogs for vendor as used in inspection
    ScratchCard.findOne({licNumber: inspectionData.licNum})
    .then(scard => {
        CallLog.updateMany(
            {scratchCardserialNumber: scard.serialNumber, beenInspected: false},
            {$set: {beenInspected: true}}
        )
        .then(() => {
            req.inspectionData = inspectionData
            next()
        })
    })
    .catch(err => console.log(err))   
}

module.exports = markCallLogs