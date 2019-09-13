
import { connect } from 'react-redux';
import { receiveCurrentPopup } from '../../actions/ui_actions'

import Popup from './popup'

const mapStateToProps = (state, ownProps) => ({
    popup: state.ui.currentPopup
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    receiveCurrentPopup: (popup) => dispatch(receiveCurrentPopup(popup))
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);