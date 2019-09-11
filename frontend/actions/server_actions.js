export const RECEIVE_SERVERS = "RECEIVE_SERVERS";

import * as APIUtil from '../util/server_api_util';

const receiveServers = (servers) => ({
    type: RECEIVE_SERVERS,
    servers
})

export const fetchServers = () => dispatch => (
    APIUtil.fetchServers()
        .then(
            (servers) => dispatch(receiveServers(servers))
        )
);