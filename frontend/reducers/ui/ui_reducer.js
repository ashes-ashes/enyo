import { RECEIVE_CURRENT_MODAL, TOGGLE_MODAL, RECEIVE_EDIT_ID, RECEIVE_OPTIONS } from '../../actions/ui_actions';

const uiReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_MODAL:
            newState.currentModal = action.modal;
            return newState;
        case TOGGLE_MODAL:
            newState.currentModal === action.modal ? newState.currentModal = null : newState.currentModal = action.modal;
            return newState;
        case RECEIVE_EDIT_ID:
            newState.editId = action.editId;
            return newState;
        case RECEIVE_OPTIONS:
            return Object.assign(newState, action.options);
        default:
            return state;
    }
}

export default uiReducer;