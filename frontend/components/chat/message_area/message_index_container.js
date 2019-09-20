import { connect } from 'react-redux';

import MessageIndex from './message_index';

import { fetchChannel } from '../../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => ({
    messages: Object.values(state.entities.messages).filter((message) => {
        if (message) {
            return message.channel_id == ownProps.channelId
        }
    }),
    users: state.entities.users
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchChannel: () => dispatch(fetchChannel(ownProps.channelId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageIndex);