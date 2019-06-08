const CallLog = require('../../../models/CallLog');

const createCallLog = (req, res, next) => {
    const scratchCardsData = req.scratchCardsData
    const newLog = new CallLog({
        operatorName: req.body.operatorName,
        callDate: req.body.callDate,
        callerNationalID: req.body.callerNationalID,
        scratchCardserialNumber: req.body.scratchCardserialNumber,
        beenInspected: false
    });
    const cardsQuantity = Number(scratchCardsData.cardsQuantity) - 1

    newLog.save()
    .then(log => {
        req.cardsQuantity = cardsQuantity
        req.log = log
        next()
    })
    .catch(err => {
        console.log('Save error => ' + err);
    })
}

module.exports = createCallLog