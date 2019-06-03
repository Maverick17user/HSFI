import axios from 'axios';
import { FETCH_IN_CONFIRM } from '../types';

export const fetchNpcs = () => dispatch => {
    axios.get('/api/users/fetch')
    .then(res => {
        dispatch({
            type: FETCH_IN_CONFIRM,
            users: res.data
        });
    })
    .catch(err => {
        throw new Error(err)
    });
}