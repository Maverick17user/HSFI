import axios from 'axios';
import { GET_ERRORS, REMOVE_TRANSACTION_STATE } from '../types';
export const submitTransaction = (callData) => dispatch => {
    axios.post('/api/cards/venScratchCards', callData)
        .then(res => {
            dispatch({
                type: REMOVE_TRANSACTION_STATE
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