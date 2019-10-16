import { connect } from 'react-redux';

import { toggleModal } from '../../../../actions/ui_actions';

import UserBar from './user_bar'

const mapStateToProps = (state) => ({
    user: state.entities.users[state.session.id],
    currentModal: state.ui.currentModal
})

const mapDispatchToProps = (dispatch) => ({
    toggleModal: (modal) => dispatch(toggleModal(modal))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserBar)