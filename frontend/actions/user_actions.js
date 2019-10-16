
import * as APIUtil from '../util/server_memberships_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

import { receiveFormErrors } from './error_actions';
import { receiveCurrentModal } from './ui_actions';


const receiveUser = (payload) => ({
    type: RECEIVE_USER,
    payload
})


export const updateUser = (formData, userId) => dispatch => (
    APIUtil.updateServer(formData, userId)
        .then(
            (payload) => {
                dispatch(receiveCurrentModal(""))
                dispatch(receiveUser(payload))
            }
        )
);