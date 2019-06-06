import { 
    PREPARE_DONWLOAD_DATA,
    RESET
} from '../actions/types';

const initialState = []

export default function(state = initialState, action ) {
    switch(action.type) {
        case PREPARE_DONWLOAD_DATA: {
            return action.payload
        }
        case RESET:
            return initialState   
        default: 
            return state;
    }
}