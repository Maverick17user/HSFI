
const createFileData = (req, res) => {
    const reportQueries = req.reportQueries
    const schemas = req.schemas

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
}

module.exports = createFileData