import { ADD_NEW_COUNTRY } from '../actions/types';
// import isEmpty from '../is-empty';

const initialState = {
    countries: []
}

export default function(state = initialState, action ) {
    // console.log(action.payload);
    
    switch(action.type) {
        case ADD_NEW_COUNTRY:
            return Object.assign({}, state, {
                countries: [...state.countries, action.countries]
            })
        default: 
            return state;
    }
}