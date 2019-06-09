import { GET_DB_QUESTIONS } from '../types'

export const fetchQuestions = options => dispatch => {
    fetch('/api/questions/redactPanel/inspectionQuestions', options)
    .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: GET_DB_QUESTIONS,
                payload: data
            })
        })
        .catch(err => console.log(err))
}