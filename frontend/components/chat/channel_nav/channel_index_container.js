import { connect } from "react-redux";
import ChannelIndex from "./channel_index"

import { fetchServer } from '../../../actions/server_actions';
import { receiveCurrentModal } from '../../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
    server: ownProps.server,
    channels: ownProps.server.channel_ids.map((channel_id) => {
        return state.entities.channels[channel_id]
    })
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchServer: () => dispatch(fetchServer(ownProps.server.id)),
    receiveCurrentModal: (modal) => dispatch(receiveCurrentModal(modal))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChannelIndex)