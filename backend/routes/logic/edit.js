const express = require('express');
const bcrypt = require('bcryptjs');

const validateEdit = require('../../validation/edit/user')
const Manager_User = require('../../models/Manager_User');
const NPC_User = require('../../models/NPC_User');
const Operator_User = require('../../models/Operator_User');

const editLogic = (req, res) => {
    const {data} = req.body
    const { errors, isValid } = validateEdit(data);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const {
        name, email, country, phone, password_cur, password
    } = data
    const currentUser = req.body.user
    const userID = currentUser.id
    const dataForNewObject = [{name}, {email}, {country}, {phone}, {password}]
    let usesSchema

    switch (currentUser.role) {
        case 'manager':
            usesSchema = Manager_User
            break;
        case 'npc':
            usesSchema = NPC_User
            break;
        case 'operator':
            usesSchema = Operator_User
            break;
        default:
            break;
    }

    usesSchema.findOne({_id: userID})
    .then(foundedUser => {
        if(foundedUser.email === email) {
            errors.email = 'User with this email already exists';
            return res.status(400).json(errors);
        }

        if(foundedUser.name === name) {
            errors.email = 'User with this name already exists';
            return res.status(400).json(errors);
        }

        bcrypt.compare(password_cur, foundedUser.password)
        .then(isMatch => {
            if(isMatch) {
                const validData = dataForNewObject.filter(unit => Object.values(unit)[0])
                let editedData = Object.assign({}, ...validData)
                
                if(Object.values(editedData).length === 0) {
                    errors.common = 'Please, fill at list one input';
                    return res.status(400).json(errors);
                }
                
                if(editedData.password) {
                    bcrypt.genSalt(10, (err, salt) => {
                        if(err) console.error('There was an error', err);
                        else {
                            bcrypt.hash(password, salt, (err, hash) => {
                                if(err) console.error('There was an error', err);
                                else {
                                    editedData.password = hash
                                    saveInDB(editedData, userID)
                                }
                            });
                        }
                    })
                }
                else {
                    saveInDB(editedData, userID)
                }
            }
            else {
                errors.password_cur = 'Incorrect current password';
                return res.status(400).json(errors);
            }
        });
    })
    .catch(err => console.log(err))

    const saveInDB = (data, id) => {
        usesSchema.findOneAndUpdate(
            {_id: id}, 
            {$set: data}
        )
        .then(user => res.json(user))
    }
}


module.exports = editLogic;