
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL"
export const REMOVE_CHANNEL = "REMOVE_CHANNEL"

import * as APIUtil from '../util/channels_api_util';
import { receiveFormErrors } from './error_actions';

const receiveChannel = (payload) => ({
    type: RECEIVE_CHANNEL,
    payload
})

const removeChannel = (channelId) => ({
    type: REMOVE_CHANNEL,
    channelId
})

export const fetchChannel = (channelId) => dispatch => (
    APIUtil.fetchChannel(channelId)
        .then(
            (payload) => dispatch(receiveChannel(payload)),
            (err) => dispatch(receiveFormErrors(err))
        )
)

export const createChannel = (name, serverId) => dispatch => (
    APIUtil.createChannel(name, serverId)
        .then(
            (payload) => dispatch(receiveChannel(payload)),
            (err) => dispatch(receiveFormErrors(err))
        )
);

export const deleteChannel = (channelId) => dispatch => (
    APIUtil.deleteChannel(channelId)
        .then(
            () => dispatch(removeChannel(channelId)),
            (err) => dispatch(receiveFormErrors(err))
        )
)