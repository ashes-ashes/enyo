export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

import * as APIUtil from '../util/session_api_util';

import { fetchUser } from '../util/users_api_util';


const receiveCurrentUser = (payload) => ({
    type: RECEIVE_CURRENT_USER,
    payload
});

const logoutCurrentUser = (currentUser) => ({
    type: LOGOUT_CURRENT_USER,
    currentUser
})

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const login = (user) => dispatch => (
    APIUtil.login(user)
        .then(
            (user) => {
                dispatch(receiveCurrentUser(user))
            },
            (err) => dispatch(receiveSessionErrors(err.responseJSON))
        )
);

export const logout = () => dispatch => (
    APIUtil.logout()
        .then(
            () => dispatch(logoutCurrentUser()),
            (err) => dispatch(receiveSessionErrors(err.responseJSON))
        )
);

export const signup = (user) => dispatch => (
    APIUtil.signup(user)
        .then(
            (user) => dispatch(receiveCurrentUser(user)),
            (err) => dispatch(receiveSessionErrors(err.responseJSON))
        )
);

export const fetchCurrentUser = () => (dispatch, getState) => {
    let state = getState();
    let currentUserId = state.session.id;
    return fetchUser(currentUserId)
        .then(
            (payload) => dispatch(receiveCurrentUser(payload)),
            (err) => dispatch(receiveSessionErrors(err.responseJSON))
        )
};