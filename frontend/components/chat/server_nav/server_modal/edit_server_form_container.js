
import { connect } from 'react-redux';
import { updateServer } from '../../../../actions/server_actions'

import EditServerForm from './edit_server_form'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.form,
    server: state.entities.servers[state.ui.editId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateServer: (formData, serverId) => dispatch(updateServer(formData, serverId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditServerForm);