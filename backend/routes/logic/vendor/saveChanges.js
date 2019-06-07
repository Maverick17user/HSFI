const Vendor = require('../../../models/Vendor');

const saveChanges = (req, res, next) => {
    const updatedData = req.updatedData
    const scdata = req.scdata

    // Find user and change his flag status
    Vendor.findOneAndUpdate(
        {licNumber: scdata.licNumber}, 
        updatedData
    ).then(() => {
        console.log('yes');
        return res.status(200)
    })
}

module.exports = saveChanges