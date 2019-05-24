import { HANDLE_INPUT_CHANGE_IN_USER_PROFILE_EDIT } from '../types'

export const catchInputData = event => {
    const {name, value} = event.target
    return {
        type: HANDLE_INPUT_CHANGE_IN_USER_PROFILE_EDIT,
        name,
        value
    }
}