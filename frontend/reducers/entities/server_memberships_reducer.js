import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_SERVER_MEMBERSHIP, REMOVE_SERVER_MEMBERSHIP } from '../../actions/server_membership_actions';

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
            newState[action.serverMembership.id] = action.serverMembership
            return newState;
        case REMOVE_SERVER_MEMBERSHIP:
            newState[action.serverMembershipId] = undefined;
            return newState;
        default:
            return state;
    }
}

export default serverMembershipsReducer;