import { 
    FETCH_IN_CONFIRM,
    RESET,
} from '../actions/types';

const initialState = {
    users: []
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case FETCH_IN_CONFIRM: {
            return Object.assign({}, state, {
                users: action.users
            })
        }
    case RESET:
        return initialState   
        default: 
            return state;
    }
}