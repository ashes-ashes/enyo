import { connect } from "react-redux";
import ChannelIndex from "./channel_index"

import { fetchServer } from '../../../actions/server_actions';
import { receiveCurrentModal } from '../../../actions/ui_actions';

const mapStateToProps = (state) => ({
    channel: 
})

const mapDispatchToProps = (dispatch) => ({
    fetchServers: () => dispatch(fetchServers()),
    receiveCurrentModal: (modal) => dispatch(receiveCurrentModal(modal))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServerIndex)
