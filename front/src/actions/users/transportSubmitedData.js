import { GET_ERRORS } from '../types'
import axios from 'axios'
import {logoutUser} from '../authentication'

export const transportSubmitedData = (data, user, history) => dispatch => {
    let route

    switch (user.role) {
        case 'manager':
            route = "/api/managerUsers"
            break;
        case 'npc':
            route = "/api/users"
            break;
        case 'operator':
            route = "/api/operatorUsers"
            break;
        default:
            break;
    }
    
    axios.post(`${route}/edit`, {data, user})
    .then(res => {
        (() => {
            logoutUser(history)
        })()
    })
    .catch(err => {
        console.log(err);
        
        // dispatch({
        //     type: GET_ERRORS,
        //     payload: err.response.data
        // });
    });
}