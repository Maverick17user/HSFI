// Service functions
const getCallLogs_ByOriginalIDs = logs => {
    return [...new Set(removeDuplicates(logs, "callerNationalID"))];
}

const removeDuplicates = (data, param) => {
    return data.filter(function (item, pos, array) {
        return array.map(function (mapItem) { 
            return mapItem[param]; 
        }).indexOf(item[param]) === pos;
    })
}

module.exports = getCallLogs_ByOriginalIDs