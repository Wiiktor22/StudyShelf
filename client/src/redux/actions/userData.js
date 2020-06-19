import axios from 'axios';
import { CREATE_DATA_SUCCESS, CREATE_DATA_ERROR, GET_DATA_SUCCESS, GET_DATA_ERROR, CREATE_NOTE_SUCCESS, CREATE_NOTE_ERROR, DELETE_NOTE_SUCCESS, DELETE_NOTE_ERROR, CREATE_LINK_SUCCESS, CREATE_LINK_ERROR, DELETE_LINK_ERROR, DELETE_LINK_SUCCESS, CREATE_VIDEO_ERROR, CREATE_VIDEO_SUCCESS, DELETE_VIDEO_ERROR, DELETE_VIDEO_SUCCESS } from '../actions/types';

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

export const addNewLink = newLink => async dispatch => {
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
    };
    
    try {
        const res = await axios.put('/api/userdata/link', newLink, config);
        dispatch({
            type: CREATE_LINK_SUCCESS,
            payload: res.data.links[0]
        })
    } catch (error) {
        dispatch({
            type: CREATE_LINK_ERROR
        })
    }
}

export const deleteLink = id => async dispatch => {
    try {
        await axios.delete(`/api/userdata/link/${id}`)

        dispatch({
            type: DELETE_LINK_SUCCESS,
            payload: id
        })
    } catch (error) {
        dispatch({
            type: DELETE_LINK_ERROR
        })
    }
}

export const addNewVideo = newVideo => async dispatch => {
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
    };
    
    try {
        const res = await axios.put('/api/userdata/video', newVideo, config);
        dispatch({
            type: CREATE_VIDEO_SUCCESS,
            payload: res.data.videos[0]
        })
    } catch (error) {
        dispatch({
            type: CREATE_VIDEO_ERROR
        })
    }
}

export const deleteVideo = id => async dispatch => {
    try {
        await axios.delete(`/api/userdata/video/${id}`)
        
        dispatch({
            type: DELETE_VIDEO_SUCCESS,
            payload: id
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: DELETE_VIDEO_ERROR
        })
    }
}