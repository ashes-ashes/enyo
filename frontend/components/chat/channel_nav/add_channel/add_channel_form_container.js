import { connect } from 'react-redux';

import { createChannel } from '../../../../actions/channel_actions';
import { receiveCurrentModal } from '../../../../actions/ui_actions';

import AddChannelForm from './add_channel_form'

const mapStateToProps = (state, ownProps) => ({
    serverId: ownProps.serverId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createChannel: (name, serverId) => dispatch(createChannel(name, serverId)),
    receiveCurrentModal: (modal) => dispatch(receiveCurrentModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddChannelForm);