const Vendor = require('../../../models/Vendor');

const updateVendor = (req, res, next) => {
    const inspectionData = req.inspectionData
    
    // Update vendor staus and stars count
    Vendor.findOne({licNumber: inspectionData.licNum})
    .then(vendor => {
        let stars, flagStatus

        if (inspectionData.totalOSS >= 0) {
            stars = vendor.stars + 1
            flagStatus = 'inspected'
        } 
        else {
            stars = vendor.stars - 1
            flagStatus = vendor.flagStatus
        }

        Vendor.findOneAndUpdate(
            {licNumber: inspectionData.licNum},
            {$set:{stars, flagStatus, oss: inspectionData.totalOSS}})
        .then(() => {
            next()
        })
    })
}

module.exports = updateVendor