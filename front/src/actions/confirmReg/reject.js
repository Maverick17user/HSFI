import axios from 'axios'
import { FETCH_IN_CONFIRM } from '../types'

export const rejectRegister = (user, role) => dispatch => {
    let url

    if (role === 'manager') {
        url = '/api/users'
    }
    else if (role === 'npc') {
        url = '/api/operatorUsers'
    }

    axios.post(`${url}/reject`, user)
    .then(res => {
        axios.get(`${url}/fetch`)
        .then(res => {
            dispatch({
                type: FETCH_IN_CONFIRM,
                users: res.data
            });
        })
    })
    .catch(err => {
        throw new Error(err)
    });
}