const Inspection = require('../../../models/Inspection');

const saveInspection = (req, res) => {
    const inspectionData = req.inspectionData

    // Save inspection data in DB
    const inspectionLog = new Inspection(inspectionData);

    inspectionLog.save()
    .then(() => res.status(200).json("saved"))
    .catch(err => console.log(err)) 
}

module.exports = saveInspection