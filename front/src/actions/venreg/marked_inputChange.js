import { MARKED_INPUT_CHANGE_IN_VENREG } from '../types'

export const marked_inputChange = (target, index, prop) => dispatch => {
    dispatch(marked_inputChangeInVenReg(target, index, prop));  
}

export const marked_inputChangeInVenReg = (target, index, prop) => {
    return {
        type: MARKED_INPUT_CHANGE_IN_VENREG,
        target,
        index,
        prop
    }
}