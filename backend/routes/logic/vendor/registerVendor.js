const Vendor = require('../../../models/Vendor');

const registerVendor = (req, res) => {
    Vendor.findOne({
        licNumber: req.body.newVendor.licNumber
    }).then(licNumber => {
        if(licNumber) {
            return res.status(400).json({
                licNumber: 'Vendor with this license already exists'
            });
        }
        else {
            const newVendor = new Vendor({
                operatorName: req.body.newVendor.operatorName,
                regDate: req.body.newVendor.regDate,
                country: req.body.newVendor.country,
                venName: req.body.newVendor.venName,
                venPhotoURL: `/img/userAvatars/${req.body.avatarFileName}`,
                licNumber: req.body.newVendor.licNumber,
                licScanURL: req.body.newVendor.licScanURL,
                phone: req.body.newVendor.phone,
                email: req.body.newVendor.email,
                buisnessLocation: req.body.newVendor.buisnessLocation,
                buisnessSchedule: req.body.newVendor.buisnessSchedule,
                ingredientSource: req.body.newVendor.ingredientSource,
                foodGroup: req.body.newVendor.foodGroup,
                flagStatus: '',
                hasBeenFlagged: false,
                oss: '',
                isOpen: true,
                gps: req.body.newVendor.gps,
                stars: 0
            });

            newVendor.save()
            .then(ven => {
                res.json(ven)
            })
            .catch(err => {
                console.log(err);
            })                                 
        }
    });
}

module.exports = registerVendor