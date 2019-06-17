import axios from 'axios';
import { GET_ERRORS, MARK_VENREG_SUCCESS, REMOVE_VENREG_STATE } from '../types';

export const submitVenRegForm = (newVendor, config) => dispatch => {
    axios.post('/api/vendors/validate', newVendor)
    .then(res => {
        
        axios.post('/api/vendors/avatarUpload', newVendor.venPhotoURL, config)
        .then(avatarFileName => {
            
            axios.post('/api/vendors/venRegistration', {newVendor, avatarFileName: avatarFileName.data})
            .then(() => {

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
            .catch(err => dispatch(hendleError(err)))
        })
        .catch(err => dispatch(hendleError(err)))
    })
    .catch(err => dispatch(hendleError(err)))
}

const hendleError = (err) => {
    return {
        type: GET_ERRORS,
        payload: err.response.data
    };
}