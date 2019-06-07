const Organization = require('../../../models/Organizations');

const deleteOrganization = (req, res) => {
    Organization.findOne({
        organization: req.body.organization
    }).then(organization => {
        if(!organization) {
            return res.status(400).json({
                organization: 'Organization not found'
            });
        }
        else {
            Organization.deleteOne({organization: req.body.organization})
            .then(() => {
                console.log(req.body.organization + ' removed!');
                res.json(req.body.organization)
            })
            .catch(err => {
                console.log(err);
            })                                    
        }
    });
}

module.exports = deleteOrganization