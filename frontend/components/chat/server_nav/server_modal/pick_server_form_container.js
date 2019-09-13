
import { connect } from 'react-redux';
import { receiveCurrentPopup } from '../../../../actions/ui_actions'

import PickServerForm from './pick_server_form'

const mapStateToProps = (state, ownProps) => ({
    popup: state.ui.currentPopup
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    receiveCurrentPopup: (popup) => dispatch(receiveCurrentPopup(popup))
});

export default connect(mapStateToProps, mapDispatchToProps)(PickServerForm);