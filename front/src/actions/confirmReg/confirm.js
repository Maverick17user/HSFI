import axios from 'axios'
import { FETCH_IN_CONFIRM } from '../types'

export const confirmRegister = (user, role) => dispatch => {
    let url

    if (role === 'manager') {
        url = '/api/users'
    }
    else if (role === 'npc') {
        url = '/api/operatorUsers'
    }

    axios.post(`${url}/confirm`, user)
    .then(res => {
        axios.get(`${url}/fetch`)
        .then(res => {
            dispatch({
                type: FETCH_IN_CONFIRM,
                users: res.data
            });
            alert('Confirmed')
        })
    })
    .catch(err => {
        throw new Error(err)
    });
}