import { connect } from 'react-redux';

// import { fetchChannel } from '../../../actions/channel_actions';

import Main from './main'

const mapStateToProps = (state, ownProps) => ({
    channel: state.entities.channels[ownProps.match.params.channelId]
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);