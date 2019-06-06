import { 
    GET_DB_VENDORS,
    RESET
} from '../actions/types';

const initialState = {
    dbVendors: []
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_DB_VENDORS:
            return {
                ...state,
                dbVendors: action.payload
            }   
        case RESET:
            return initialState   
        default: 
            return state;
    }
}