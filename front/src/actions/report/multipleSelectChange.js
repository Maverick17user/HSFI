import {MULTI_SELECT_IN_REPORT} from '../types'

export const multipleSelectChange = target => {
    return {
        type: MULTI_SELECT_IN_REPORT,
        target
    }
}