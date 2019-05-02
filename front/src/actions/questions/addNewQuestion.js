import axios from 'axios';
import { GET_ERRORS, ADD_NEW_QUESTION } from '../types'

export const addNewQuestion = (q) => dispatch => {
    axios.post('/api/questions/redactPanel/inspectionQuestions', q)
        .then(res => {
            dispatch(setNewQuestion(res.data));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const setNewQuestion = name => {
    return {
        type: ADD_NEW_QUESTION,
        payload: name
    }
}