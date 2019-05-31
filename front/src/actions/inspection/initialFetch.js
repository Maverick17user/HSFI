import { FETCH_IN_INSPECTION } from '../types'

export const initialFetch = data => {
    return {
        type: FETCH_IN_INSPECTION,
        payload: data
    }
}