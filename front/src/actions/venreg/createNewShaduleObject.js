import { CREATE_UNIT_IN_VENREG } from '../types'

export const createNewShaduleObject = (prop) => dispatch => {
    console.log('uhuu');
    
    dispatch(addUnit(prop));  
}

export const addUnit = (prop) => {
    return {
        type: CREATE_UNIT_IN_VENREG,
        prop
    }
}