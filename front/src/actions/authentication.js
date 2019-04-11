import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user, history) => dispatch => {
    axios.post('/api/users/register', user)
        .then(res => history.push('/login'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const registerManagerUser = (user, history) => dispatch => {
    axios.post('/api/managerUsers/registerManager', user)
        .then(res => history.push('/loginManager'))
        .catch(err => {
            console.log(err.response.data);
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const registerOperatorUser = (user, history) => dispatch => {
    axios.post('/api/operatorUsers/registerOperator', user)
        .then(res => history.push('/loginOperator'))
        .catch(err => {
            console.log(err.response.data);
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const loginManagerUser = (user) => dispatch => {
    axios.post('/api/managerUsers/loginManager', user)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const loginUser = (user) => dispatch => {
    axios.post('/api/users/login', user)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const loginOpreatorUser = (user) => dispatch => {
    axios.post('/api/operatorUsers/loginOperator', user)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/');
}