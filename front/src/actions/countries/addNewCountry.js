import axios from 'axios';
import { GET_ERRORS, ADD_NEW_COUNTRY, CREATE_SUCCESS_MESSAGE_ADD_COUNTRY } from '../types'

export const addNewCountry = (newCountry) => dispatch => {
    axios.post('/api/countries/redactPanel/countryList', newCountry)
        .then(res => {
            dispatch({
                type: ADD_NEW_COUNTRY,
                payload: res.data
            })
            dispatch({
                type: CREATE_SUCCESS_MESSAGE_ADD_COUNTRY,
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}