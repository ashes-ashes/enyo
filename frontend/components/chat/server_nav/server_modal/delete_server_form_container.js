import { connect } from 'react-redux';

import { receiveCurrentModal } from '../../../../actions/ui_actions'
import { deleteServer } from '../../../../actions/server_actions'
import { receiveFormErrors } from '../../../../actions/error_actions';

import DeleteServerForm from './delete_server_form'

const mapStateToProps = (state, ownProps) => ({
    modal: state.ui.currentModal,
    server: state.entities.servers[state.ui.editId],
    errors: state.errors.form
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    receiveCurrentModal: (modal) => dispatch(receiveCurrentModal(modal)),
    deleteServer: (serverId) => dispatch(deleteServer(serverId)),
    receiveFormErrors: (errors) => dispatch(receiveFormErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteServerForm);