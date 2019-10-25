export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";


import * as APIUtil from '../util/servers_api_util';
import { receiveFormErrors } from './error_actions';
import { receiveCurrentModal } from './ui_actions';

const receiveServers = (servers) => ({
    type: RECEIVE_SERVERS,
    servers
})

const receiveServer = (payload) => ({
    type: RECEIVE_SERVER,
    payload
})

const removeServer = (serverId) => ({
    type: REMOVE_SERVER,
    serverId
})


export const fetchServers = () => dispatch => (
    APIUtil.fetchServers()
        .then(
            (servers) => dispatch(receiveServers(servers))
        )
);

export const fetchServer = (serverId) => dispatch => (
    APIUtil.fetchServer(serverId)
        .then(
            (payload) => dispatch(receiveServer(payload)),
        )
);

export const createServer = (formData) => dispatch => (
    APIUtil.createServer(formData)
        .then(
            (payload) => dispatch(receiveServer(payload)),
            (err) => dispatch(receiveFormErrors(err))
        )
);

export const updateServer = (formData, serverId) => dispatch => (
    APIUtil.updateServer(formData, serverId)
        .then(
            (payload) => {
                dispatch(receiveCurrentModal(null))
                dispatch(receiveServer(payload))
            }
        )
);

export const deleteServer = (serverId) => dispatch => (
    APIUtil.deleteServer(serverId)
        .then(
            () => {
                dispatch(removeServer(serverId))
                dispatch(receiveCurrentModal(null))
            }
        )
)