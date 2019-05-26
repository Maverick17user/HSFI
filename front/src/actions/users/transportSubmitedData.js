import { GET_ERRORS } from '../types'
import axios from 'axios'

export const transportSubmitedData = (data, user) => dispatch => {
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
    
    return new Promise((resolve, reject) => {
        axios.post(`${route}/edit`, {data, user})
        .then(() => {
            resolve('Success')
        })
        .catch(err => {
            reject('Fail')
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
    }) 
}