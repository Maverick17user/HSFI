import axios from 'axios';
import { GET_ERRORS } from '../types';
export const submitAction = (callData) => dispatch => {
    axios.post('/api/calls/hotline', callData)
    .then(res => {
        axios.put('/api/vendors/changeFlagState', res.data) 
        .then(() => console.log('ok'))
        .catch(err => console.log(err))
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    });
}