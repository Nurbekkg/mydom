import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from "../actions/actionTypes";

const initialState = {
    loginError: null,
    user: null,
    token: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_FAILURE:
            return {...state, loginError: action.error};
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                token: action.user.api_token,
                loginError: null
            };
        case LOGOUT_USER:
            return {...state, user: null, token: null};
        default:
            return state;
    }
};

export default reducer;