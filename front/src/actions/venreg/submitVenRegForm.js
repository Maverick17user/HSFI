import axios from 'axios';
import { GET_ERRORS, MARK_VENREG_SUCCESS, REMOVE_VENREG_STATE } from '../types';

export const submitVenRegForm = (newVendor) => dispatch => {
    axios.post('/api/vendors/venRegistration', newVendor)
        .then(res => {
            dispatch({
                type: MARK_VENREG_SUCCESS
            })
            dispatch({
                type: REMOVE_VENREG_STATE
            })
            dispatch({
                type: GET_ERRORS,
                payload: {}
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}