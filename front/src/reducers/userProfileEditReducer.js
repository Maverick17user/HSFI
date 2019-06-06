import {
    HANDLE_INPUT_CHANGE_IN_USER_PROFILE_EDIT,
    RESET
} from '../actions/types'

const initialState = {
    name: '',
    email: '',
    country: '',
    phone: '',
    password_cur: '',
    password: '',
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case HANDLE_INPUT_CHANGE_IN_USER_PROFILE_EDIT: {
            return Object.assign({}, state, {
                [action.name]: action.value,
            })}
        case RESET:
            return initialState   
        default:
            return state;
    }
}