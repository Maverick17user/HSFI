import { GET_DB_ORGS } from '../types'

export const fetchOrganizations = options => dispatch => {
    // Organizations list
    fetch('/api/organizations/redactPanel/organizationsList', options)
    .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: GET_DB_ORGS,
                payload: data
            })
        })
        .catch(err => console.log(err)) 
}