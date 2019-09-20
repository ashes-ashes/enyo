import { connect } from 'react-redux';
import Listener from './listener';
import { receiveMessage } from '../../../../actions/message_actions'

const mapStateToProps = (state, ownProps) => ({
    channelId: ownProps.match.params.channelId
})

const mapDispatchToProps = (dispatch) => ({
    receiveMessage: (message) => dispatch(receiveMessage(message))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Listener);