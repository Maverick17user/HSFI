import axios from 'axios';
import { GET_ERRORS } from '../types';
export const submitAction = (callData) => dispatch => {
    axios.post('/api/calls/hotline', callData)
        .then(res => {
            console.log('CallLog added successfully');
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}