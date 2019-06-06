import { FETCH_COUNTRY_IN_REPORT } from '../types'

export const fetchCountry = (data) => dispatch => {
    dispatch({
        type: FETCH_COUNTRY_IN_REPORT,
        payload: data
    }) 
}