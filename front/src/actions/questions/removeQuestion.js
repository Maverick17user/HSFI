import axios from 'axios';
import { GET_ERRORS, REMOVE_QUESTION } from '../types'

export const removeQuestion = (question) => dispatch => {
    const headers = {'Content-Type': 'application/json'};
    const data = question;
      
    axios.delete('/api/questions/redactPanel/inspectionQuestions', {headers, data})
        .then(res => {
            console.log(res.data);
            dispatch(deleteQuestion(res.data));
        })
        .catch(err => {
            console.log(err.response.data);
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const deleteQuestion = name => {
    return {
        type: REMOVE_QUESTION,
        foodGroup: name
    }
}