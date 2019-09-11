
import { connect } from 'react-redux';
import { login, receiveSessionErrors } from '../../actions/session_actions';


import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(receiveSessionErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);