import { connect } from 'react-redux';

import MessageIndex from './message_index';

const mapStateToProps = (state, ownProps) => ({
    messages: Object.values(state.entities.messages).filter((message) => 
        message.channel_id == ownProps.channelId
    ),
    users: state.entities.users
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageIndex);