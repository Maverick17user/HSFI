import axios from 'axios';
import { ADD_NEW_COUNTRY } from '../types'

export const addNewCountry = (newCountry) => dispatch => {
    axios.post('/api/countries/addCountry', newCountry)
        .then(res => {
            dispatch(setNewCountry(res.data));
        })
        .catch(err => {
            // dispatch({
            //     type: GET_ERRORS,
            //     payload: err.response.data
            // });
            console.log(err);
        });
        
}

export const setNewCountry = name => {
    return {
        type: ADD_NEW_COUNTRY,
        countryName: name
    }
}