const validateScratchCardReg = require('../../../validation/scratchCard/scratchCards')

const validate = (req, res, next) => {
    const { errors, isValid } = validateScratchCardReg(req.body);

    if(!isValid) {   
        return res.status(400).json(errors);
    }
    else {
        next()
    }
}

module.exports = validate