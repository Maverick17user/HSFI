import { INPUT_CHANGE_IN_HOTLINE } from '../types'

export const inputChange = data => {
    return {
        type: INPUT_CHANGE_IN_HOTLINE,
        payload: data
    }
}