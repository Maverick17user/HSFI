const getVendorsByLicenseNumber = (req, res) => {
    const vendor = req.body.vendors.find(vendor => vendor.licNumber === req.body.inputedLicNumber)
    if (vendor !== undefined) {
        res.json(vendor)
    }
    else {
        return res.status(400).json({licNumber: 'Vendor with this license not found'});
    } 
}

module.exports = getVendorsByLicenseNumber