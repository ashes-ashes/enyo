import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const initialState = []

const sessionErrorsReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = state.slice(0);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            newState = action.errors;
            return newState;
        case RECEIVE_CURRENT_USER:
            return initialState;
        default:
            return newState;
    }
}

export default sessionErrorsReducer;