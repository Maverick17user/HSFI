const getCallLogs_ByOriginalIDs = require('./functions/getCallLogs_ByOriginalIDs')

const changeFlagStatus = (req, res, next) => {
    const callLogs = req.callLogs

    // Get original call logs by callerID
    const originalCallLogs = getCallLogs_ByOriginalIDs(callLogs)
    let updatedData, flagStatus, hasBeenFlagged
    
    // Change vendor's flag
    if (originalCallLogs.length === 1 || originalCallLogs.length === 2) {
        flagStatus = "is flagged"
    }
    else if (originalCallLogs.length >= 3) {
        flagStatus = "red flagged"
        hasBeenFlagged = true
    }
    
    if (hasBeenFlagged == true) {
        updatedData = Object.assign({},{flagStatus},{hasBeenFlagged})
    }
    else {
        updatedData = {flagStatus}
    }

    req.updatedData = updatedData
    next(); 
}

module.exports = changeFlagStatus