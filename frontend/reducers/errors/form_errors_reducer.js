import { RECEIVE_FORM_ERRORS } from '../../actions/error_actions';

const formErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = state.slice(0);

    switch (action.type) {
        case RECEIVE_FORM_ERRORS:
            newState = action.errors;
            return newState;
        default:
            return [];
    }
}

export default formErrorsReducer;