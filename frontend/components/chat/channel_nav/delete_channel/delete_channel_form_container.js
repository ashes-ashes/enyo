import { connect } from 'react-redux';

import { receiveCurrentModal } from '../../../../actions/ui_actions'
import { deleteChannel } from '../../../../actions/channel_actions'
import { receiveFormErrors } from '../../../../actions/error_actions';

import DeleteChannelForm from './delete_channel_form'

const mapStateToProps = (state, ownProps) => ({
    modal: state.ui.currentModal,
    channelId: state.ui.editId,
    channel: state.entities.channels[state.ui.editId],
    errors: state.errors.form
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    receiveCurrentModal: (modal) => dispatch(receiveCurrentModal(modal)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
    receiveFormErrors: (errors) => dispatch(receiveFormErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteChannelForm);