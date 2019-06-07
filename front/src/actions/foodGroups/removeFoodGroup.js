import axios from 'axios';
import { GET_ERRORS, REMOVE_FOODGROUP } from '../types'

export const removeFoodGroup = (foodGroup) => dispatch => {
    const headers = {'Content-Type': 'application/json'};
    const data = foodGroup;
      
    axios.delete('/api/foodGroups/redactPanel/foodGroups', {headers, data})
        .then(res => {
            dispatch({
                type: REMOVE_FOODGROUP,
                foodGroup: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}