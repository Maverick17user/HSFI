import { INPUT_CHANGE_IN_TRANSACTION} from '../types'

export const inputChange = data => {
    return {
        type: INPUT_CHANGE_IN_TRANSACTION,
        payload: data
    }
}