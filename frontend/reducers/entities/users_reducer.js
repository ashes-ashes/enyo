import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_MESSAGE } from '../../actions/message_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.payload.user.id] = action.payload.user;
            return newState;
        case RECEIVE_MESSAGE:
            newState[action.payload.user.id] = action.payload.user;
            return newState;
        default:
            return state;
    }
}

export default usersReducer;