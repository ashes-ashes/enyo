export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";


import * as APIUtil from '../util/servers_api_util';
import { receiveFormErrors } from './error_actions';

const receiveServers = (servers) => ({
    type: RECEIVE_SERVERS,
    servers
})

const receiveServer = (server) => ({
    type: RECEIVE_SERVER,
    server
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
            (server) => dispatch(receiveServer(server)),
        )
);

export const createServer = (formData) => dispatch => (
    APIUtil.createServer(formData)
        .then(
            (server) => dispatch(receiveServer(server)),
            (err) => dispatch(receiveFormErrors(err))
        )
);

export const updateServer = (server) => dispatch => (
    APIUtil.updateServer(server)
        .then(
            (server) => dispatch(receiveServer(server))
        )
);

export const deleteServer = (serverId) => dispatch => (
    APIUtil.deleteServer(serverId)
        .then(
            (serverId) => dispatch(removeServer(serverId))
        )
)