import { FETCH_IN_REPORT } from '../types'

export const fetchInitialData = date => {
    return {
        type: FETCH_IN_REPORT,
        reportDate: date
    }
}