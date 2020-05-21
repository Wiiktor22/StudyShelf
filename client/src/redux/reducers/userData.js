import { CREATE_DATA_SUCCESS, CREATE_DATA_ERROR } from '../actions/types';

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
        case CREATE_DATA_ERROR:
            return {
                ...state,
                userId: null,
                isLoading: false
            }
        default:
            return state
    }
}