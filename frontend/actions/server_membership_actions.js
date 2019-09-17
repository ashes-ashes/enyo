
import * as APIUtil from '../util/server_memberships_api_util';

export const RECEIVE_SERVER_MEMBERSHIP = "RECEIVE_SERVER_MEMBERSHIP";
export const REMOVE_SERVER_MEMBERSHIP = "REMOVE_SERVER_MEMBERSHIP";

import { receiveFormErrors } from './error_actions';


const receiveServerMembership = (serverMembership) => ({
    type: RECEIVE_SERVER_MEMBERSHIP,
    serverMembership
})

const removeServerMembership = (serverMembershipId) => ({
    type: REMOVE_SERVER_MEMBERSHIP,
    serverMembershipId
})

export const createServerMembership = (inviteCode) => dispatch => (
    APIUtil.createServerMembership(inviteCode)
        .then(
            (serverMembership) => dispatch(receiveServerMembership(serverMembership)),
            (err) => dispatch(receiveFormErrors(err.responseJSON))
        )
);

export const deleteServerMembership = (serverMembershipId) => dispatch => (
    APIUtil.destroyServerMembership(serverMembershipId)
        .then(
            () => dispatch(removeServerMembership(serverMembershipId)),
            (err) => dispatch(receiveFormErrors(err.responseJSON))
        )
);
