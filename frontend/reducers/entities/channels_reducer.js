import {
    RECEIVE_SERVER,
    REMOVE_SERVER,
} from "../../actions/server_actions";
import { REMOVE_SERVER_MEMBERSHIP } from "../../actions/server_membership_actions";

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SERVER:
            console.log(action.payload.channels)
            Object.keys(action.payload.channels).forEach((id) =>
                newState[id] = action.payload.channels[id]
            );
            return newState;
        case REMOVE_SERVER:
            delete newState[action.serverId];
            return newState;
        // case REMOVE_SERVER_MEMBERSHIP:
        //    
        //     return newState;
        default:
            return state;
    }
};

export default serversReducer;