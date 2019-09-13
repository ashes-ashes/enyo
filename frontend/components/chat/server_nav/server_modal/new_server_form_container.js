
import { connect } from 'react-redux';
import { createServer } from '../../../../actions/server_actions'

import NewServerForm from './new_server_form'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.form
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createServer: (server) => dispatch(createServer(server))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewServerForm);