import { RECEIVE_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CHANNEL:
            return Object.assign({}, newState, action.payload.messages);
        case RECEIVE_MESSAGE:
            newState[action.payload.message.id] = action.payload.message;
            return newState;
        default:
            return state;
    }
};

export default messagesReducer;