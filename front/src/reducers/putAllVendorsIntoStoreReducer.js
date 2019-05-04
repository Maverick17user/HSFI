import { GET_DB_VENDORS } from '../actions/types';

const initialState = {
    dbVendors: []
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_DB_VENDORS:
            // const dbVendorsList = action.payload.map(vData => vData.question)
            return {
                ...state,
                dbVendors: action.payload
            }   
        default: 
            return state;
    }
}