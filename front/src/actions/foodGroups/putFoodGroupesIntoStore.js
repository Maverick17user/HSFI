import axios from 'axios';
import { GET_DB_FOODGROUPES } from '../types'

export const putFoodGroupesIntoStore = (foodGroupsData) => dispatch => {
    axios.get('/api/foodGroups/redactPanel/foodGroups', foodGroupsData)
        .then(res => {
            dispatch(setAddedCFoodGroup(res.data));
        })  
        .catch(err => {
            console.log(err);
        });    
}

export const setAddedCFoodGroup = foodGroup => {
    return {
        type: GET_DB_FOODGROUPES,
        payload: foodGroup
    }
}