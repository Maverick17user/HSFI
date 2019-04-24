import axios from 'axios';
import { GET_DB_COUNTRIES } from '../types'

export const putCountriesIntoStore = (countriesData) => dispatch => {
    axios.get('/api/countries/redactPanel/countryList', countriesData)
        .then(res => {
            dispatch(setAddedCountries(res.data));
        })  
        .catch(err => {
            console.log(err);
        });    
}

export const setAddedCountries = countriesData => {
    return {
        type: GET_DB_COUNTRIES,
        payload: countriesData
    }
}