import axios from 'axios';
import { GET_ERRORS, REMOVE_HOTLINE_STATE } from '../types';
export const submitAction = (callData) => dispatch => {
    axios.post('/api/calls/hotline', callData)
    .then(res => {
        axios.put('/api/vendors/changeFlagState', res.data) 
        .then((res) => {
            dispatch({
                type: REMOVE_HOTLINE_STATE
            })
            dispatch({
                type: GET_ERRORS,
                payload: {}
            });
        })
        .catch(err => console.log(err))
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    });
}