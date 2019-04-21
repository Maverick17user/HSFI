import { FETCH_IN_VENREG } from '../types'

export const fetchData = (data) => dispatch => {
    dispatch(fetchInVenReg(data));  
}

export const fetchInVenReg = data => {
    return {
        type: FETCH_IN_VENREG,
        payload: data
    }
}