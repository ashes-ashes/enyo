import { connect } from 'react-redux';
import Listener from './listener';
import { receiveMessage } from '../../../../actions/message_actions';
import { receiveLastChannel } from '../../../../actions/ui_actions'

const mapStateToProps = (state, ownProps) => ({
    channelId: ownProps.match.params.channelId
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    receiveLastChannel: () => dispatch(receiveLastChannel(ownProps.match.params.serverId, ownProps.match.params.channelId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Listener);