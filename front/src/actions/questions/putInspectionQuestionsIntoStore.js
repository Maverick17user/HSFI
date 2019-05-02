import axios from 'axios';
import { GET_DB_QUESTIONS } from '../types'

export const putInspectionQuestionsIntoStore = (q) => dispatch => {
    axios.get('/api/questions/redactPanel/inspectionQuestions', q)
        .then(res => {
            dispatch(setAddedQuestion(res.data));
        })  
        .catch(err => {
            console.log(err);
        });    
}

export const setAddedQuestion = question => {
    return {
        type: GET_DB_QUESTIONS,
        payload: question
    }
}