import { 
    RECEIVE_SERVERS, 
    RECEIVE_SERVER 
} from "../actions/server_actions";

const serversReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SERVERS:
            return action.servers;
        default:
            return state;
    }
};

export default serversReducer;