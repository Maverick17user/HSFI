import { GET_DB_COUNTRIES } from '../types'

export const fetchAllCountries = options => dispatch => {
    // Fetch countryList
    fetch('/api/countries/redactPanel/countryList', options)
    .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: GET_DB_COUNTRIES,
                payload: data
            });
        })
        .catch(err => console.log(err))
}