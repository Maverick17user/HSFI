const Organization = require('../../../models/Organizations');

const addOrganization = (req, res) => {
    Organization.findOne({
        organization: req.body.organization
    }).then(organization => {
        if(organization) {
            return res.status(400).json({
                organization: 'Food group already exists'
            });
        }
        else {
            const neworganization = new Organization({
                organization: req.body.organization,
            });
            neworganization.save()
            .then(organization => {
                console.log(req.body.organization + ' added!');
                res.json(organization)
            })
            .catch(err => {
                console.log(err);
            })                                    
        }
    });
}

module.exports = addOrganization