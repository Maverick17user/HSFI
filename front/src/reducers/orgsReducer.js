import { GET_DB_ORGS, ADD_NEW_ORG, REMOVE_ORG } from '../actions/types';

const initialState = {
    dborganizations: []
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_DB_ORGS:
            const dborganizationsList = action.payload.map(orgData => orgData.organization)
            return {
                ...state,
                dborganizations: dborganizationsList
            }
        case ADD_NEW_ORG:
            return Object.assign({}, state, {
                dborganizations: [...state.dborganizations, action.payload.organization]
            })
        case REMOVE_ORG:
            state.dborganizations.splice(state.dborganizations.indexOf(action.organization), 1)
            return Object.assign({}, state, {
                dborganizations: state.dborganizations
            })
                
        default: 
            return state;
    }
}