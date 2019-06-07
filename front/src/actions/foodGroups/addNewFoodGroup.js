import axios from 'axios';
import { GET_ERRORS, ADD_NEW_FOODGROUP } from '../types'

export const addNewFoodGroup = (newfoodGroup) => dispatch => {
    axios.post('/api/foodGroups/redactPanel/foodGroups', newfoodGroup)
        .then(res => {
            dispatch({
                type: ADD_NEW_FOODGROUP,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}