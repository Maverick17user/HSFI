import axios from 'axios';
import { FETCH_VENDOR_DATA_IN_TRANSACTION, GET_ERRORS } from '../types'

export const fetchVendorData = (inputedLicNumber, vendors) => dispatch => {
    axios.post('/api/vendors/getVendor', {inputedLicNumber, vendors})
    .then(res => {
        dispatch({
            type: FETCH_VENDOR_DATA_IN_TRANSACTION,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    });
}