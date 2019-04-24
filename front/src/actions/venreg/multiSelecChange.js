import { MULTI_SELECT_CHANGE_IN_VENREG } from '../types'

export const multiSelecChange = (target, index, prop) => dispatch => {
    dispatch(multiSelecChangeInVenReg(target, index, prop));  
}

export const multiSelecChangeInVenReg = (target, index, prop) => {
    return {
        type: MULTI_SELECT_CHANGE_IN_VENREG,
        target,
        index,
        prop
    }
}