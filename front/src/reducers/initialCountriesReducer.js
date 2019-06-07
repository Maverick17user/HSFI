import { GET_DB_COUNTRIES, ADD_NEW_COUNTRY, REMOVE_COUNTRY,RESET } from '../actions/types';

const initialState = {
    dbCountries: []
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_DB_COUNTRIES:
            const dbCountryList = action.payload.map(countryData => countryData.country)
            return {
                ...state,
                dbCountries: dbCountryList
            }

        case ADD_NEW_COUNTRY:
            return Object.assign({}, state, {
                dbCountries: [...state.dbCountries, action.payload.country]
            })

        case REMOVE_COUNTRY:
            state.dbCountries.splice(state.dbCountries.indexOf(action.countryName), 1)
            return Object.assign({}, state, {
                dbCountries: state.dbCountries
            })

        case RESET:
            return initialState   
                 
        default: 
            return state;
    }
}
