const CallLog = require('../../../models/CallLog');

const filterCallLogs = (req, res, next) => {
    // Find all call logs for this card's serial number
    const scdata = req.scdata
    
    CallLog.find({
        scratchCardserialNumber: scdata.serialNumber,
        beenInspected: false
    })
    .then(callLogs => {
        req.callLogs = callLogs
        next(); 
    })
    .catch(err => console.log(err))
}

module.exports = filterCallLogs