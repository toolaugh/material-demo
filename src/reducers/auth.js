import store from 'store';
export default function authReducer(state = {
    token: store.get('token'),
    status: '',
    error: {},
    register: {},
}, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                status: 'loading',
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                status: 'success',
                token: action.token,
            };
        case 'LOGIN_ERROR':
            return {
                status: 'error',
                error: action.error,
            };
        default:
            return state;
    }
}
