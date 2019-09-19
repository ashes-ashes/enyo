import { connect } from 'react-redux';

import MessageForm from './message_form';

import { createMessage } from '../../../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUserId: state.session.id,
    nick: Object.values(state.entities.server_memberships).find((server_membership) => {
        server_membership.user_id === state.session.id && server_membership.server_id === ownProps.channelId
    }).nickname
});


const mapDispatchToProps = (dispatch) => ({
    createMessage: (message) => dispatch(createMessage(message))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageForm);