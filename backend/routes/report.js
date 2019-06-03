const express = require('express')
const router = express.Router()

const Vendor = require('../models/Vendor')
const ScratchCard = require('../models/ScratchCard')
const CallLog = require('../models/CallLog')
const FoodGroup = require('../models/FoodGroups')
const validateReports = require('../validation/report/reports');

const parseDate = require('./logic/report/parseDate')

router.post('/createFileData', function(req, res) {
    const { errors, isValid } = validateReports(req.body);

    if(!isValid) {   
        console.log(errors);
        
        return res.status(400).json(errors);
    }

    const formData = req.body
    const {
        reportDate, from, to, countries, reportQueries
    } = formData

    Promise.all([
        Vendor.find({}),
        ScratchCard.find({}), 
        CallLog.find({}),
        FoodGroup.find({})
    ])
    .then(data => {
        const sortedVens = filterByTimePeriod(from, to, filterVendorsByCountry(data[0], countries), "regDate")
        const sortedScratchCards = filterByTimePeriod(from, to, data[1], "transactionDate")
        const sortedCallLog = filterByTimePeriod(from, to, data[2], "callDate")

        const schemas = {
            vendors: sortedVens,
            scratchCards: sortedScratchCards,
            callLog: sortedCallLog,
            foodGroup: data[3]
        }

        const fileData = reportQueries
        .filter(query => query[1] === true)
        .map(query => {
            switch (query[0]) {
                case 'Registered vendors':
                    return {vendorsCount: schemas.vendors.length, queryTitle:query[0]}

                case 'Vendors by group':
                    const vendorsByGroups = schemas.foodGroup.map(DBfoodGroupUnit => {
                        const vendorCount = schemas.vendors
                        .filter(vendor => vendor.foodGroup === DBfoodGroupUnit.foodGroup).length
                        return {[DBfoodGroupUnit.foodGroup]: vendorCount}
                    })
                    return {vendorsByGroups, queryTitle:query[0]}

                case 'Average OSS':
                    // TODO: Refactioring: 
                    // - Change oss type from String to Number
                    const vendorsWithOss = schemas.vendors.filter(vendor => vendor.oss !== '-')

                    if (schemas.vendors.length === 0) {
                        return {avg: 0, queryTitle:query[0]}
                    }
                    else {
                        const avgOss = vendorsWithOss
                        .map(vendor => vendor.oss)
                        .reduce((a, b) => Number(a) + Number(b)) / vendorsWithOss.length
                        
                        return {avgOss, queryTitle:query[0]}
                    }

                case 'Total red flags':
                    let totalRedFlags = 0
                    schemas.vendors.forEach(vendor => {
                        if(vendor.flagStatus === 'red flagged') {
                            totalRedFlags += 1
                        }
                    });
                    return {totalRedFlags, queryTitle:query[0]}

                case 'Average quality stars':
                    // TODO: Refactioring: 
                    // - Change oss type from String to Number
                    if (schemas.vendors.length === 0) {
                        return {avgStars: 0, queryTitle:query[0]}
                    }
                    else {
                        const avgStars = schemas.vendors
                        .map(vendor => vendor.stars)
                        .reduce((a, b) => Number(a) + Number(b)) / schemas.vendors.length
    
                        return {avgStars, queryTitle:query[0]}
                    }

                case 'Hotline calls':
                    return {callsCount: schemas.callLog.length, queryTitle:query[0]}

                case 'Total card transactions':
                    return {cardTransactions: schemas.scratchCards.length, queryTitle:query[0]}

                case 'Total revenues':
                    const dollarRevenues = []
                    const euroRevenues = []

                    if (schemas.vendors.length === 0) {
                        return {
                            totalRevenues: {dollarRevenuesTotal: 0, euroRevenuesTotal: 0}, 
                            queryTitle:query[0]
                        }
                    }
                    else {
                        schemas.scratchCards
                        .map(card => card.totalCost)
                        .forEach(revenue => {
                            const cost = Number(revenue.slice(0, -1))
                            if(revenue.indexOf('$') !== -1) {
                                dollarRevenues.push(cost)
                            } 
                            else {
                                euroRevenues.push(cost)
                            }
                        })
    
                        const dollarRevenuesTotal = dollarRevenues.reduce((a, b) => a + b)
                        const euroRevenuesTotal = euroRevenues.reduce((a, b) => a + b)
    
                        return {
                            totalRevenues: {dollarRevenuesTotal, euroRevenuesTotal}, 
                            queryTitle:query[0]
                        }
                    }      
            }
        })
        
        return res.json(fileData)
    })
})

module.exports = router;



// TODO: Put into separate modules

const filterVendorsByCountry = (data, countries) => {
    return data.filter(ven => {
        const venCountryList = ven.country[0].country

        return countries.every((selectedValueItem) => {
            return (venCountryList.indexOf(selectedValueItem) !== -1) ? true : false
        }) === true 
    })
}

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