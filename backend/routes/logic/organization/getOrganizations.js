const express = require('express');
const Organization = require('../../../models/Organizations');

const getOrganizations = (req, res) => {
    Organization.find({}, 'organization')
    .then(organizations => res.json(organizations))
    .catch(err => {
        console.log(err);
    })
}

module.exports = getOrganizations