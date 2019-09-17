import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_SERVER_MEMBERSHIP, REMOVE_SERVER_MEMBERSHIP } from '../../actions/server_membership_actions';
import { REMOVE_SERVER } from '../../actions/server_actions';

const serverMembershipsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            Object.keys(action.payload.server_memberships).forEach((id) => {
                newState[id] = action.payload.server_memberships[id]
            })
            return newState;
        case RECEIVE_SERVER_MEMBERSHIP:
            newState[action.payload.server_membership.id] = action.payload.server_membership
            return newState;
        case REMOVE_SERVER_MEMBERSHIP:
            delete newState[action.serverMembership.id];
            return newState;
        case REMOVE_SERVER:
            Object.keys(newState).forEach((key) => {
                if (newState[key].server_id === action.serverId) {
                    delete newState[key];
                }
            })
            return newState;
        default:
            return state;
    }
}

export default serverMembershipsReducer;