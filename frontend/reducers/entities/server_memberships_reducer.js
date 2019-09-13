import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';


const serverMembershipsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            Object.keys(action.payload.server_memberships).forEach((id) => {
                newState[id] = action.payload.server_memberships[id]
            })
            return newState;
        default:
            return state;
    }
}

export default serverMembershipsReducer;