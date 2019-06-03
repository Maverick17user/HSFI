import { 
    FETCH_IN_CONFIRM,
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
        default: 
            return state;
    }
}