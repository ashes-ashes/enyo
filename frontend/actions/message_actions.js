
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

import * as APIUtil from '../util/messages_api_util';

export const receiveMessage = (payload) => ({
    type: RECEIVE_MESSAGE,
    payload
})

export const createMessage = (message) => dispatch => (
    APIUtil.createMessage(message)
);