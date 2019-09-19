import {
    RECEIVE_SERVER,
    REMOVE_SERVER,
} from "../../actions/server_actions";
import { REMOVE_SERVER_MEMBERSHIP } from "../../actions/server_membership_actions";
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../../actions/channel_actions";

const channelServersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SERVER:
            // Object.keys(action.payload.channel_servers).forEach((id) =>
            //     newState[id] = action.payload.channel_servers[id]
            // );
            // return newState;
            return Object.assign({}, state, action.payload.channel_servers);
        case REMOVE_SERVER:
            Object.values(newState).forEach((channel_server) => {
                if ( channel_server.server_id === serverId ) {
                    delete newState[channel_server.id]
                }
            })
            return newState;
        case REMOVE_SERVER_MEMBERSHIP:
            Object.values(newState).forEach((channel_server) => {
                if (channel_server.server_id === action.serverMembership.server_id) {
                    delete newState[channel_server.id]
                }
            })
            return newState;
        case RECEIVE_CHANNEL:
            Object.keys(action.payload.channel_servers).forEach((id) => 
                newState[id] = action.payload.channel_servers[id]
            );
            return newState;
        case REMOVE_CHANNEL:
            Object.values(newState).forEach((channel_server) => {
                    if (channel_server.channel_id === action.channelId) {
                        delete newState[channel_server.id];
                    }
                }
            )
            return newState;
        default:
            return state;
    }
};

export default channelServersReducer;