import { INPUT_CHANGE_IN_VENREG } from '../types'

export const inputChange = (data) => dispatch => {
    dispatch(inputChangeInVenReg(data));  
}

export const inputChangeInVenReg = data => {
    return {
        type: INPUT_CHANGE_IN_VENREG,
        payload: data
    }
}