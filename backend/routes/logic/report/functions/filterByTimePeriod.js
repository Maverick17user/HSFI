const parseDate = require('../../../logic/report/parseDate')

const filterByTimePeriod = (from, to, data, dateKeyName) => {
    return data.filter(dataUnit => {
        const actionDate = new Date(parseDate(dataUnit[dateKeyName]))
        const dateFrom = new Date(parseDate(from))
        const dateTo = new Date(parseDate(to))
        
        while (dateFrom <= dateTo) {
            if (actionDate.getTime() === dateFrom.getTime()) {
                return true
            }
            dateFrom.setDate(dateFrom.getDate() + 1)
        }
    
        return false
    })
}

module.exports = filterByTimePeriod