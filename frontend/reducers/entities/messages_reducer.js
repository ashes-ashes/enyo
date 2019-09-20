import { RECEIVE_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CHANNEL:
            return Object.assign({}, newState, action.payload.messages);
        case RECEIVE_MESSAGE:
            let message = Object.values(action.payload.messages)[0]
            newState[message.id] = message
            return newState;
        default:
            return state;
    }
};

export default messagesReducer;