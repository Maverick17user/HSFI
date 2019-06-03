import axios from 'axios';
import { PREPARE_DONWLOAD_DATA, GET_ERRORS } from '../types';

export const submitAction = formData => dispatch => {
    const reportQueriesAsArray = Array.from( formData.reportQueries )
    const data = Object.assign({}, formData, {reportQueries: reportQueriesAsArray})

    axios.post('/api/report/createFileData', data)
    .then(res => {
        dispatch({
            type: PREPARE_DONWLOAD_DATA,
            payload: res.data
        });
    })  
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    });     
}
