const Vendor = require('../../../models/Vendor');

const getAllVendors = (req, res) => {
    Vendor.find({})
    .then(data => res.json(data))
    .catch(err => console.log(err)) 
}

module.exports = getAllVendors