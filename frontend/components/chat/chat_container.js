import { connect } from "react-redux";
import Chat from './chat'

import { fetchCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    fetchCurrentUser: () => dispatch(fetchCurrentUser())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat)