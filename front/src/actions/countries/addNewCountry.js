import axios from 'axios';
import { GET_ERRORS, ADD_NEW_COUNTRY } from '../types'

export const addNewCountry = (newCountry) => dispatch => {
    axios.post('/api/countries/redactPanel/countryList', newCountry)
        .then(res => {
            dispatch(setNewCountry(res.data));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const setNewCountry = name => {
    return {
        type: ADD_NEW_COUNTRY,
        payload: name
    }
}