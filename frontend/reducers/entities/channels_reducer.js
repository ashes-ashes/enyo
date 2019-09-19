import {
    RECEIVE_SERVER,
    REMOVE_SERVER,
} from "../../actions/server_actions";
import { REMOVE_SERVER_MEMBERSHIP } from "../../actions/server_membership_actions";
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SERVER:
            Object.keys(action.payload.channels).forEach((id) =>
                newState[id] = action.payload.channels[id]
            );
            return newState;
        case RECEIVE_CHANNEL:
            newState[action.payload.channel.id] = action.payload.channel
            return newState;
        case REMOVE_CHANNEL:
            delete newState[action.channelId];
            return newState;
        // case REMOVE_SERVER:

        // case REMOVE_SERVER_MEMBERSHIP:

        default:
            return state;
    }
};

export default channelsReducer;