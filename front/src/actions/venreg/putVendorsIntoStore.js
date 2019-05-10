import { GET_DB_VENDORS } from '../types'

export const putVendorsIntoStore = data => {
    return {
        type: GET_DB_VENDORS,
        payload: data
    }
}