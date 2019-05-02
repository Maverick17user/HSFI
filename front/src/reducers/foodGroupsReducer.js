import { GET_DB_FOODGROUPES, ADD_NEW_FOODGROUP, REMOVE_FOODGROUP } from '../actions/types';

const initialState = {
    dbFoodGroups: []
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_DB_FOODGROUPES:
            const dbFoodGroupList = action.payload.map(groupData => groupData.foodGroup)
            return {
                ...state,
                dbFoodGroups: dbFoodGroupList
            }
        case ADD_NEW_FOODGROUP:
            return Object.assign({}, state, {
                dbFoodGroups: [...state.dbFoodGroups, action.payload.foodGroup]
            })
        case REMOVE_FOODGROUP:
            state.dbFoodGroups.splice(state.dbFoodGroups.indexOf(action.foodGroup), 1)
            return Object.assign({}, state, {
                dbFoodGroups: state.dbFoodGroups
            })
                
        default: 
            return state;
    }
}