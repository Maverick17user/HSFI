const Vendor = require('../../../models/Vendor');

const registerVendor = (req, res) => {
    Vendor.findOne({
        licNumber: req.body.licNumber
    }).then(licNumber => {
        if(licNumber) {
            return res.status(400).json({
                licNumber: 'Vendor with this license already exists'
            });
        }
        else {
            const newVendor = new Vendor({
                operatorName: req.body.operatorName,
                regDate: req.body.regDate,
                country: req.body.country,
                venName: req.body.venName,
                venPhotoURL: req.body.venPhotoURL,
                licNumber: req.body.licNumber,
                licScanURL: req.body.licScanURL,
                phone: req.body.phone,
                email: req.body.email,
                buisnessLocation: req.body.buisnessLocation,
                buisnessSchedule: req.body.buisnessSchedule,
                ingredientSource: req.body.ingredientSource,
                foodGroup: req.body.foodGroup,
                flagStatus: '',
                hasBeenFlagged: false,
                oss: '',
                isOpen: true,
                gps: req.body.gps,
                stars: 0
            });
            newVendor.save()
                .then(ven => {
                    console.log(req.body.venName + ' added!');
                    res.json(ven)
                })
                .catch(err => {
                    console.log(err);
                })                                    
        }
    });
}

module.exports = registerVendor