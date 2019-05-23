import axios from 'axios';
import { GET_ERRORS } from '../types';
// ADD_NEW_VENDOR
export const submitVenRegForm = (newVendor) => dispatch => {
    axios.post('/api/vendors/venRegistration', newVendor)
        .then(res => {
            console.log('Vendor added successfully');
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}