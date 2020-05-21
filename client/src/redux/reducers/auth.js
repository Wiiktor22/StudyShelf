import { REGISTER_SUCCESS, REGISTER_ERROR, USER_LOADED, AUTH_ERROR } from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: true,
    user: null
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                isLoading: false
            }
        case REGISTER_ERROR:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isloading: false,
                user: payload
            }
        default:
            return state
    }
}