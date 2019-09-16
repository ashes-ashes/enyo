
import { connect } from 'react-redux';
import { receiveCurrentModal } from '../../actions/ui_actions'

import Modal from './modal'

const mapStateToProps = (state, ownProps) => ({
    modal: state.ui.currentModal
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    receiveCurrentModal: (modal) => dispatch(receiveCurrentModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);