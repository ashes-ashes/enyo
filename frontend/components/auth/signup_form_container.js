
import { connect } from 'react-redux';
import { signup, receiveSessionErrors } from '../../actions/session_actions';

import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveSessionErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);