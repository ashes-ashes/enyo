import { 
    RECEIVE_SERVERS, 
    RECEIVE_SERVER,
    REMOVE_SERVER,
} from "../../actions/server_actions";
import { RECEIVE_SERVER_MEMBERSHIP, REMOVE_SERVER_MEMBERSHIP } from "../../actions/server_membership_actions";

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SERVERS:
            return action.servers;
        case RECEIVE_SERVER:
            newState[action.payload.server.id] = action.payload.server;
            return newState;
        case REMOVE_SERVER:
            delete newState[action.serverId];
            return newState;
        case REMOVE_SERVER_MEMBERSHIP:
            delete newState[action.serverMembership.server_id];
            return newState;
        case RECEIVE_SERVER_MEMBERSHIP:
            newState[action.payload.server.id] = action.payload.server;
            return newState;
        default:
            return state;
    }
};

export default serversReducer;