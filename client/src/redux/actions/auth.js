import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_ERROR, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_ERROR } from './types';
import setAuthToken from '../setAutkToken';
import { store } from '../../index';
import { createUserData, getUserData } from './userData';

export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
    
    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

export const register = ({ name, lastName, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, lastName, email, password });

    try {
        const res = await axios.post('/api/users', body, config);

        dispatch({ 
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser());
        dispatch(createUserData());
    } catch (error) {
        dispatch({
            type: REGISTER_ERROR
        })
    }
}

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/auth', body, config);

        dispatch({ 
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser());
        dispatch(getUserData());
    } catch (error) {
        dispatch({
            type: LOGIN_ERROR
        })
    }
}