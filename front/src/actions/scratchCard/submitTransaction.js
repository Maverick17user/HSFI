import axios from 'axios';
import { GET_ERRORS } from '../types';
export const submitTransaction = (callData) => dispatch => {
    axios.post('/api/cards/venScratchCards', callData)
        .then(res => {
            console.log('Cards added successfully');
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}