import { INPUT_CHANGE_IN_REPORT} from '../types'

export const inputChangeHandler = data => {
    return {
        type: INPUT_CHANGE_IN_REPORT,
        payload: data
    }
}