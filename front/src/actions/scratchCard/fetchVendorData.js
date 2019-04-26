import { FETCH_VENDOR_DATA_IN_TRANSACTION } from '../types'

export const fetchVendorData = data => {
    return {
        type: FETCH_VENDOR_DATA_IN_TRANSACTION,
        payload: data
    }
}