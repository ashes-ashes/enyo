export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";

import * as APIUtil from '../util/servers_api_util';

const receiveServers = (servers) => ({
    type: RECEIVE_SERVERS,
    servers
})

const receiveServer = (server) => ({
    type: RECEIVE_SERVER,
    server
})

export const fetchServers = () => dispatch => (
    APIUtil.fetchServers()
        .then(
            (servers) => dispatch(receiveServers(servers))
        )
);

export const fetchServer = (id) => dispatch => (
    APIUtil.fetchServer(id)
        .then(
            (server) => dispatch(receiveServer(server))
        )
);

export const createServer = (server) => dispatch => (
    APIUtil.createServer(server)
        .then(
            (server) => dispatch(receiveServer(server))
        )
);