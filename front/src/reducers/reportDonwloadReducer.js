import { 
    PREPARE_DONWLOAD_DATA,
} from '../actions/types';

const initialState = []

export default function(state = initialState, action ) {
    switch(action.type) {
        case PREPARE_DONWLOAD_DATA: {
            return action.payload
        }

        default: 
            return state;
    }
}