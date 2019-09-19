import { connect } from 'react-redux';

import ChannelIndexItem from './channel_index_item';
import { receiveCurrentModal, receiveEditId } from '../../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
    channel: ownProps.channel,
    modal: state.ui.currentModal,
    key: ownProps.key,
    currentUserId: state.session.id
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    receiveCurrentModal: modal => dispatch(receiveCurrentModal(modal)),
    receiveEditId: () => dispatch(receiveEditId(ownProps.channel.id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChannelIndexItem)