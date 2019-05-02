import axios from 'axios';
import { GET_ERRORS, REMOVE_FOODGROUP } from '../types'

export const removeFoodGroup = (foodGroup) => dispatch => {
    const headers = {'Content-Type': 'application/json'};
    const data = foodGroup;
      
    axios.delete('/api/foodGroups/redactPanel/foodGroups', {headers, data})
        .then(res => {
            console.log(res.data);
            dispatch(deleteFoodGroup(res.data));
        })
        .catch(err => {
            console.log(err.response.data);
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const deleteFoodGroup = name => {
    return {
        type: REMOVE_FOODGROUP,
        foodGroup: name
    }
}