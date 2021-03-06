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

// ---------------------------------------------------------------------------------------------------------------

const loginUserSuccess = (user) => {
    return {type: LOGIN_USER_SUCCESS, user};
};

const loginUserFailure = error => {
    return {type: LOGIN_USER_FAILURE, error};
};

export const loginUser = userData => {
    return dispatch => {
        return axios.post('/users/login/', userData).then(
            response => {
                dispatch(loginUserSuccess(response.data.data));
                dispatch(push('/personal-account'));
            }
        ).catch(error => {
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

