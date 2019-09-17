import { RECEIVE_CURRENT_MODAL, RECEIVE_EDIT_ID } from '../../actions/ui_actions';

const uiReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_MODAL:
            newState.currentModal = action.modal;
            return newState;
        case RECEIVE_EDIT_ID:
            newState.editId = action.editId;
            return newState;
        default:
            return state;
    }
}

export default uiReducer;