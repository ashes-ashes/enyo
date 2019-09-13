
import { connect } from 'react-redux';
import { createServerMembership } from '../../../../actions/server_membership_actions'

import JoinServerForm from './join_server_form'

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createServerMembership: (server) => dispatch(createServerMembership(server))
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinServerForm);