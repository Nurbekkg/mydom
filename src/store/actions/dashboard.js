import axios from '../../axios-api';
import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from "./actionTypes";

const fetchUsersSuccess = users => {
    return {type: FETCH_USERS_SUCCESS, users};
};

const fetchUsersFailure = error => {
    return {type: FETCH_USERS_FAILURE, error};
};

export const fetchUsers = page => {
    return dispatch => {
        return axios.get(`/v2/analytics/users/?page=${page}`).then(
            response => {
                dispatch(fetchUsersSuccess(response.data));
            },
            error => {
                dispatch(fetchUsersFailure(error.response.data));
            }
        )
    }
};