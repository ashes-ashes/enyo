
import * as APIUtil from '../util/server_memberships_api_util';

export const RECEIVE_SERVER_MEMBERSHIP = "RECEIVE_SERVER_MEMBERSHIP";

const receiveServerMembership = (serverMembership) => ({
    type: RECEIVE_SERVERS,
    serverMembership
})

export const createServerMembership = (inviteCode) => dispatch => (
    APIUtil.createServerMembership(inviteCode)
        .then(
            (serverMembership) => dispatch(receiveServerMembership(serverMembership))
        )
);

//put error handling in here!!!