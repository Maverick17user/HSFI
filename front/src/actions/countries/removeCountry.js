import axios from 'axios';
import { GET_ERRORS, REMOVE_COUNTRY } from '../types'

export const removeCountry = (country) => dispatch => {
    const headers = {'Content-Type': 'application/json'};
    const data = country;
      
    axios.delete('/api/countries/redactPanel/countryList', {headers, data})
        .then(res => {
            console.log(res.data);
            dispatch(deleteCountry(res.data));
        })
        .catch(err => {
            console.log(err.response.data);
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const deleteCountry = name => {
    return {
        type: REMOVE_COUNTRY,
        countryName: name
    }
}