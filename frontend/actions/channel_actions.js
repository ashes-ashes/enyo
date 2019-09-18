
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL"

import * as APIUtil from '../util/channels_api_util';

const receiveChannel = (payload) => ({
    type: RECEIVE_CHANNEL,
    payload
})

export const createChannel = (name, serverId) => dispatch => (
    APIUtil.createChannel(name, serverId)
        .then(
            (payload) => dispatch(receiveChannel(payload)),
            (err) => dispatch(receiveFormErrors(err))
        )
);