import { CREATE_UNIT_IN_VENREG } from '../types'

export const addUnitIn = (prop) => {
    return {
        type: CREATE_UNIT_IN_VENREG,
        prop
    }
}