import { FETCH_COUNTRY_IN_VENREG } from '../types'

export const fetchCountry = (data) => dispatch => {
    dispatch({
        type: FETCH_COUNTRY_IN_VENREG,
        payload: data
    }) 
}
