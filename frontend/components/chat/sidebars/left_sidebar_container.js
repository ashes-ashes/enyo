import { connect } from "react-redux";
import LeftSidebar from "./left_sidebar"

import { fetchServer } from '../../../actions/server_actions';
import { receiveCurrentModal } from '../../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
    server: state.entities.servers[ownProps.match.params.serverId]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchServer: () => dispatch(fetchServer(ownProps.match.params.serverId)),
    receiveCurrentModal: (modal) => dispatch(receiveCurrentModal(modal))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftSidebar)