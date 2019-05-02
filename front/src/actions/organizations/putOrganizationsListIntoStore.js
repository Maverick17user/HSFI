import axios from 'axios';
import { GET_DB_ORGS } from '../types'

export const putOrganizationsListIntoStore = (org) => dispatch => {
    axios.get('/api/organizations/redactPanel/organizationsList', org)
        .then(res => {
            dispatch(setAddedorg(res.data));
        })  
        .catch(err => {
            console.log(err);
        });    
}

export const setAddedorg = organization => {
    return {
        type: GET_DB_ORGS,
        payload: organization
    }
}