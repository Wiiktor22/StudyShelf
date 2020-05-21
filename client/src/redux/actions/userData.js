import axios from 'axios';
import { CREATE_DATA_SUCCESS, CREATE_DATA_ERROR, GET_DATA_SUCCESS, GET_DATA_ERROR } from '../actions/types';

export const createUserData = () => async dispatch => {
    try {
        await axios.post('/api/userdata');

        dispatch({
            type: CREATE_DATA_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: CREATE_DATA_ERROR
        })
    }
}

export const getUserData = () => async dispatch => {
    try {
        const res = await axios.get('/api/userdata');

        dispatch({
            type: GET_DATA_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_DATA_ERROR
        })
    }
}