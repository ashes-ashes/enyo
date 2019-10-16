
import * as APIUtil from '../util/users_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

import { receiveFormErrors } from './error_actions';
import { receiveCurrentModal } from './ui_actions';


const receiveUser = (payload) => ({
    type: RECEIVE_USER,
    payload
})


export const updateUser = (formData, userId) => dispatch => (
    APIUtil.updateUser(formData, userId)
        .then(
            (payload) => {
                dispatch(receiveCurrentModal(""))
                dispatch(receiveUser(payload))
            }
        )
);