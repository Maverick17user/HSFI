import { FETCH_IN_TRANSACTION } from '../types'

export const fetchInitialData = data => {
    return {
        type: FETCH_IN_TRANSACTION,
        payload: data
    }
}