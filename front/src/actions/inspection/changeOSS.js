import { SET_TOTAL_OSS_IN_INSPECTION } from '../types'

export const changeOSS = target => {
    return {
        type: SET_TOTAL_OSS_IN_INSPECTION,
        target
    }
}