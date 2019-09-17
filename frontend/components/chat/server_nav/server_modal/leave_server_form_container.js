import { connect } from 'react-redux';

import { receiveCurrentModal } from '../../../../actions/ui_actions'
import { deleteServerMembership } from '../../../../actions/server_membership_actions'
import { receiveFormErrors } from '../../../../actions/error_actions';

import LeaveServerForm from './leave_server_form'

const mapStateToProps = (state, ownProps) => ({
    server: state.entities.servers[state.ui.editId],
    serverMembership: Object.values(state.entities.serverMemberships).find((ele) =>
        ele.server_id === state.ui.editId
    )
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    receiveCurrentModal: (modal) => dispatch(receiveCurrentModal(modal)),
    deleteServerMembership: (serverMembershipId) => dispatch(deleteServerMembership(serverMembershipId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaveServerForm);