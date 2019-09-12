
import { connect } from 'react-redux';
import { createServer } from '../../../../actions/server_actions'


import AddServerForm from './add_server_form'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(receiveSessionErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);