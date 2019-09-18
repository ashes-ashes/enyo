import { connect } from "react-redux";
import ChannelIndex from "./channel_index"

import { fetchServer } from '../../../actions/server_actions';
import { receiveCurrentModal } from '../../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
    serverId: state.entities.servers[ownProps.serverId],
    channels: 
        Object.values(state.entities.channelServers).filter((channelServer) =>
            channelServer.server_id === ownProps.serverId
        ).map((channelServer) =>
            state.entities.channels[channelServer.channel_id]
        ),
    modal: state.ui.currentModal
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchServer: () => dispatch(fetchServer(ownProps.server.id)),
    receiveCurrentModal: (modal) => dispatch(receiveCurrentModal(modal))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChannelIndex)