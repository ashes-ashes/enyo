export const RECEIVE_FORM_ERRORS = "RECEIVE_FORM_ERRORS";

export const receiveFormErrors = (errors) => ({
    type: RECEIVE_FORM_ERRORS,
    errors
});