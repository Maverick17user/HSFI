import axios from 'axios';
import { GET_ERRORS, ADD_NEW_ORG } from '../types'

export const addNewOrg = (org) => dispatch => {
    axios.post('/api/organizations/redactPanel/organizationsList', org)
        .then(res => {
            dispatch(setNewOrg(res.data));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const setNewOrg = name => {
    return {
        type: ADD_NEW_ORG,
        payload: name
    }
}