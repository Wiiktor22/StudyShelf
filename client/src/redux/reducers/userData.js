import { CREATE_DATA_SUCCESS, CREATE_DATA_ERROR, GET_DATA_ERROR, GET_DATA_SUCCESS, CREATE_NOTE_SUCCESS, DELETE_NOTE_SUCCESS, CREATE_LINK_SUCCESS } from '../actions/types';

const initialState = {
    userId: null,
    notes: [],
    links: [],
    isLoading: true
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case CREATE_DATA_SUCCESS:
            return {
                ...state,
                userId: payload,
                isLoading: false
            }
        case GET_DATA_SUCCESS:
            const { userId, notes, links } = payload;
            return {
                ...state,
                userId,
                notes,
                links,
                isLoading: false
            }
        case CREATE_NOTE_SUCCESS:
            return {
                ...state,
                notes: [payload, ...state.notes],
                isLoading: false
            }
        case CREATE_LINK_SUCCESS:
            return {
                ...state,
                links: [payload, ...state.links],
                isLoading: false
            }
        case DELETE_NOTE_SUCCESS:
            return {
                ...state,
                notes: state.notes.filter(note => note._id !== payload),
                isLoading: false
            }
        case DELETE_NOTE_SUCCESS:
            return {
                ...state,
                links: state.links.filter(link => link._id !== payload),
                isLoading: false
            }
        case CREATE_DATA_ERROR:
        case GET_DATA_ERROR:
            return {
                ...state,
                userId: null,
                isLoading: false
            }
        default:
            return state
    }
}