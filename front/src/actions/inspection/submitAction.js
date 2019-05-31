import axios from 'axios';
import { GET_ERRORS } from '../types';

export const submitInspectionAction = inspectionData => dispatch => {
    axios.post('/api/inspection/submit', inspectionData)
        .then(res => {
            console.log('Inspected successfully');
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}