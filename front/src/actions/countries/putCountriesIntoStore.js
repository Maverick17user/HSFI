import { GET_DB_COUNTRIES } from '../types'

export const putCountriesIntoStore = (countriesData) => dispatch => {
    dispatch({
        type: GET_DB_COUNTRIES,
        payload: countriesData
    });
}