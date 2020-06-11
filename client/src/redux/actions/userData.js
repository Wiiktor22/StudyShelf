import axios from 'axios';
import { CREATE_DATA_SUCCESS, CREATE_DATA_ERROR, GET_DATA_SUCCESS, GET_DATA_ERROR, CREATE_NOTE_SUCCESS, CREATE_NOTE_ERROR, DELETE_NOTE_SUCCESS, DELETE_NOTE_ERROR } from '../actions/types';

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

export const addNewNote = newNote => async dispatch => {
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
    };
    
    try {
        const res = await axios.put('/api/userdata/note', newNote, config);
        dispatch({
            type: CREATE_NOTE_SUCCESS,
            payload: res.data.notes[0]
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: CREATE_NOTE_ERROR
        })
    }
}

export const deleteNote = id => async dispatch => {
    try {
        await axios.delete(`/api/userdata/note/${id}`)

        dispatch({
            type: DELETE_NOTE_SUCCESS,
            payload: id
        })
    } catch (error) {
        dispatch({
            type: DELETE_NOTE_ERROR
        })
    }
}