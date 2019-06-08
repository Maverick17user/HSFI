const Vendor = require('../../../models/Vendor')
const ScratchCard = require('../../../models/ScratchCard')
const CallLog = require('../../../models/CallLog')
const FoodGroup = require('../../../models/FoodGroups')
const filterVendorsByCountry = require('../../logic/report/functions/filterVendorsByCountry')
const filterByTimePeriod = require('../../logic/report/functions/filterByTimePeriod')

const prepareData = (req, res, next) => {
    const formData = req.body
    const {
        reportDate, from, to, countries, reportQueries, isManager
    } = formData

    Promise.all([
        Vendor.find({}),
        ScratchCard.find({}), 
        CallLog.find({}),
        FoodGroup.find({})
    ])
    .then(data => {
        const sortedVens = filterByTimePeriod(from, to, filterVendorsByCountry(data[0], countries, isManager), "regDate")
        const sortedScratchCards = filterByTimePeriod(from, to, data[1], "transactionDate")
        const sortedCallLog = filterByTimePeriod(from, to, data[2], "callDate")

        const schemas = {
            vendors: sortedVens,
            scratchCards: sortedScratchCards,
            callLog: sortedCallLog,
            foodGroup: data[3]
        }

        req.reportQueries = reportQueries
        req.schemas = schemas
        next()
    })
}

module.exports = prepareData