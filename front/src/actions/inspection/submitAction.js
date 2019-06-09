import axios from 'axios';
import { GET_ERRORS, MARK_INSPECTION_SUCCESS, REMOVE_INSPECTION_STATE } from '../types';

export const submitInspectionAction = inspectionData => dispatch => {
    axios.post('/api/inspection/submit', inspectionData)
        .then(res => {
            dispatch({
                type: MARK_INSPECTION_SUCCESS
            })
            dispatch({
                type: REMOVE_INSPECTION_STATE
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