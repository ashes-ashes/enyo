import { connect } from 'react-redux';

import MessageForm from './message_form';

import { createMessage } from '../../../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUserId: state.session.id,
    nick: Object.values(state.entities.serverMemberships).find((server_membership) => 
        server_membership.server_id == ownProps.serverId
    ).nickname || null
});


const mapDispatchToProps = (dispatch) => ({
    createMessage: (message) => dispatch(createMessage(message))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageForm);