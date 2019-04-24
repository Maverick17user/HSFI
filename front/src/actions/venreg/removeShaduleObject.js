import { REMOVE_UNIT_FROM_VENREG } from '../types'

export const removeUnitOut = (prop, index) => {
    return {
        type: REMOVE_UNIT_FROM_VENREG,
        prop,
        index
    }
}