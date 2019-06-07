import axios from 'axios';
import { GET_ERRORS, REMOVE_ORG } from '../types'

export const removeOrg = (organization) => dispatch => {
    const headers = {'Content-Type': 'application/json'};
    const data = organization;
      
    axios.delete('/api/organizations/redactPanel/organizationsList', {headers, data})
        .then(res => {
            dispatch(deleteOrg(res.data));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const deleteOrg = name => {
    return {
        type: REMOVE_ORG,
        organization: name
    }
}