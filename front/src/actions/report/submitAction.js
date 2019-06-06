import axios from 'axios';
import { PREPARE_DONWLOAD_DATA, GET_ERRORS } from '../types';

export const submitAction = (formData, flag) => dispatch => {
    const reportQueriesAsArray = Array.from(formData.reportQueries)
    let data
    if (flag === 'noManager') {
        data = Object.assign({}, formData, {reportQueries: reportQueriesAsArray, isManager: false})
    }
    else {
        data = Object.assign({}, formData, {reportQueries: reportQueriesAsArray, isManager: true})
    }

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
