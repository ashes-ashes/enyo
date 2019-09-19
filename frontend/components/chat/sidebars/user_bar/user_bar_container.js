import { connect } from 'react-redux';

import UserBar from './user_bar'

const mapStateToProps = (state) => ({
    user: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserBar)