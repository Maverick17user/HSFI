import { SET_VENDOR_PICTURE_IN_VENREG } from '../types'

export const setPicture = file => dispatch => {
    dispatch({
        type: SET_VENDOR_PICTURE_IN_VENREG,
        payload: file
    });  
}
