import { RECEIVE_CURRENT_POPUP } from '../../actions/ui_actions';

const uiReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_POPUP:
            newState.currentPopup = action.popup;
            return newState;
        default:
            return state;
    }
}

export default uiReducer;