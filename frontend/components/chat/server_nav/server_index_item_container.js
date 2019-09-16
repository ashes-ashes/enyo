import { connect } from 'react-redux';

import ServerIndexItem from './server_index_item';
import { receiveCurrentModal } from '../../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
    server: ownProps.server,
    modal: state.ui.currentModal
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    receiveCurrentModal: modal => dispatch(receiveCurrentModal(modal))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServerIndexItem)