import {push} from 'react-router-redux';
import axios from '../../axios-api';
import {NotificationManager} from 'react-notifications';
import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from "./actionTypes";

export const parseJwt = (token = '') => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    } catch (error) {
        return null;
    }
};

// ---------------------------------------------------------------------------------------------------------------

const loginUserSuccess = (token) => {
    return {type: LOGIN_USER_SUCCESS, token};
};

const loginUserFailure = error => {
    return {type: LOGIN_USER_FAILURE, error};
};

export const loginUser = userData => {
    return dispatch => {
        return axios.post('/v2/authe/login/', userData).then(
            response => {
                dispatch(loginUserSuccess(response.data.token));

                return parseJwt(response.data.token);
            }
        ).catch(error => {
            console.log(error);
            const errorObj = error.response ? error.response.data : {error: 'No internet connection'};
            dispatch(loginUserFailure(errorObj));
        })
    }
};

export const logoutUser = () => {
  return dispatch => {
      dispatch({type: LOGOUT_USER});
      dispatch(push('/'));
  }
};


export const logoutExpiredUser = () => {
  return dispatch => {
      dispatch({type: LOGOUT_USER});
      dispatch(push('/login'));
      NotificationManager.error('Error', 'Your session has expired, please login again');

  }
};


const fetchUserSuccess = user => {
    return {type: FETCH_USER_SUCCESS, user};
};

const fetchUserFailure = error => {
    return {type: FETCH_USER_FAILURE, error};
};

export const fetchUser = userId => {
    return dispatch => {
        return axios.get(`/v2/authe/users/${userId}`).then(
            response => {
                dispatch(fetchUserSuccess(response.data.data));
                dispatch(push('/'));
            },
            error => {
                dispatch(fetchUserFailure(error.response.data));
            }
        )
    }
};

