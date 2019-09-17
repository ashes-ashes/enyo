export const RECEIVE_CURRENT_MODAL = "RECEIVE_CURRENT_MODAL"
export const RECEIVE_EDIT_ID = "RECEIVE_EDIT_ID"

export const receiveCurrentModal = (modal) => ({
    type: RECEIVE_CURRENT_MODAL,
    modal
});

export const receiveEditId = (editId) => ({
    type: RECEIVE_EDIT_ID,
    editId
});