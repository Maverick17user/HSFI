import { GET_ERRORS, RESET } from '../actions/types';

const initialState = {};

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_ERRORS:
            if ((typeof action.payload == 'object' && 
                !(action.payload instanceof Array) &&
                action.payload !== null) 
                || typeof action.payload == 'string' ) {

                return action.payload;
                
            } else {
                return state
            }
        case RESET:
            return initialState
        default: 
            return state;
    }
}