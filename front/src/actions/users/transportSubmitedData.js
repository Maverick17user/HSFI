import { GET_ERRORS } from '../types'
import axios from 'axios'

export const transportSubmitedData = (data, {_id, role}) => dispatch => {
    let route

    switch (role) {
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
    
    axios.post(`${route}/edit`, data)
        // .then(res => history.push('/login'))
        .then(res => console.log(res))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}