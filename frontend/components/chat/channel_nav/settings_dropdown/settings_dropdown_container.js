import { connect } from 'react-redux';

import { receiveCurrentModal, receiveEditId } from '../../../../actions/ui_actions';

import SettingsDropdown from './settings_dropdown'

const mapStateToProps = (state, ownProps) => ({
    serverOwnerId: state.entities.servers[ownProps.serverId].owner_id,
    currentUserId: state.session.id
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    receiveCurrentModal: (modal) => dispatch(receiveCurrentModal(modal)),
    receiveEditId: (editId) => dispatch(receiveEditId(editId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsDropdown)