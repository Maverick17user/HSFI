import axios from 'axios';
import { GET_ERRORS, REMOVE_COUNTRY } from '../types'

export const removeCountry = (country) => dispatch => {
    const headers = {'Content-Type': 'application/json'};
    const data = country;
      
    axios.delete('/api/countries/redactPanel/countryList', {headers, data})
        .then(res => {
            dispatch({
                type: REMOVE_COUNTRY,
                countryName: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}
