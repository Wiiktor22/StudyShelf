import axios from 'axios';
import { CREATE_DATA_SUCCESS, CREATE_DATA_ERROR } from '../actions/types';

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