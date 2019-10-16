import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER } from '../../actions/user_actions';
import { RECEIVE_MESSAGE } from '../../actions/message_actions';
import { RECEIVE_SERVER } from '../../actions/server_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.payload.user.id] = action.payload.user;
            return newState;
        case RECEIVE_USER:
            return Object.assign(newState, action.payload.user);
        case RECEIVE_MESSAGE:
            newState[action.payload.user.id] = action.payload.user;
            return newState;
        case RECEIVE_SERVER:
            return Object.assign(newState, action.payload.users);
        default:
            return state;
    }
}

export default usersReducer;