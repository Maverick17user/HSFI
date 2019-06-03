import axios from 'axios';
import { FETCH_IN_CONFIRM } from '../types';

export const fetchOperators = () => dispatch => {
    axios.get('/api/operatorUsers/fetch')
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