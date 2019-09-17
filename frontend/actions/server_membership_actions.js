
import * as APIUtil from '../util/server_memberships_api_util';

export const RECEIVE_SERVER_MEMBERSHIP = "RECEIVE_SERVER_MEMBERSHIP";
export const REMOVE_SERVER_MEMBERSHIP = "REMOVE_SERVER_MEMBERSHIP";

import { receiveFormErrors } from './error_actions';
import { receiveCurrentModal } from './ui_actions';


const receiveServerMembership = (payload) => ({
    type: RECEIVE_SERVER_MEMBERSHIP,
    payload
})

const removeServerMembership = (serverMembership) => ({
    type: REMOVE_SERVER_MEMBERSHIP,
    serverMembership
})

export const createServerMembership = (inviteCode) => dispatch => (
    APIUtil.createServerMembership(inviteCode)
        .then(
            (payload) => {
                dispatch(receiveServerMembership(payload))
                dispatch(receiveCurrentModal(""))
            },
            (err) => dispatch(receiveFormErrors(err.responseJSON))
        )
);

export const deleteServerMembership = (serverMembershipId) => dispatch => (
    APIUtil.destroyServerMembership(serverMembershipId)
        .then(
            (serverMembership) => {
                dispatch(removeServerMembership(serverMembership))
                dispatch(receiveCurrentModal(""))
            },
            (err) => dispatch(receiveFormErrors(err.responseJSON))
        )
);
