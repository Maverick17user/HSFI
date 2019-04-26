import { FETCH_IN_HOTLINE } from '../types'

export const fetchInitialData = data => {
    return {
        type: FETCH_IN_HOTLINE,
        payload: data
    }
}