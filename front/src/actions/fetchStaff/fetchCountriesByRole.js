import { GET_DB_COUNTRIES } from '../types'

export const fetchCountriesByRole = (options, isAuthenticated, user) => dispatch => {
     // Fetch countryList
     fetch('/api/countries/redactPanel/countryList', options)
    .then(resp => resp.json())
        .then(data => {
            if(isAuthenticated) {
                if(user.role === 'npc' || user.role === 'operator') {
                    const userCountry = data.filter(dataUnit => dataUnit.country === user.country) 
                    dispatch({
                        type: GET_DB_COUNTRIES,
                        payload: userCountry
                    });
                } 
                else {
                    dispatch({
                        type: GET_DB_COUNTRIES,
                        payload: data
                    });
                } 
            }
            else {
                dispatch({
                    type: GET_DB_COUNTRIES,
                    payload: data
                });
            }
        })
        .catch(err => console.log(err))
}