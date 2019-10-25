export const RECEIVE_CURRENT_MODAL = "RECEIVE_CURRENT_MODAL";
export const RECEIVE_EDIT_ID = "RECEIVE_EDIT_ID";
export const RECEIVE_LAST_CHANNEL = "RECEIVE_LAST_CHANNEL"
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const RECEIVE_OPTIONS = "RECEIVE_OPTIONS";

export const receiveCurrentModal = (modal) => ({
    type: RECEIVE_CURRENT_MODAL,
    modal
});

export const toggleModal = (modal) => ({
    type: TOGGLE_MODAL,
    modal
});

export const receiveEditId = (editId) => ({
    type: RECEIVE_EDIT_ID,
    editId
});

export const receiveLastChannel = (serverId, channelId) => ({
    type: RECEIVE_LAST_CHANNEL,
    serverId,
    channelId
})

export const receiveOptions = (options) => ({
    type: RECEIVE_OPTIONS,
    options
});