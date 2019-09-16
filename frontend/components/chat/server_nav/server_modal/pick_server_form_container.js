
import { connect } from 'react-redux';
import { receiveCurrentModal } from '../../../../actions/ui_actions'

import PickServerForm from './pick_server_form'

const mapStateToProps = (state, ownProps) => ({
    modal: state.ui.currentModal
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    receiveCurrentModal: (modal) => dispatch(receiveCurrentModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(PickServerForm);