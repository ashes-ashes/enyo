import { connect } from 'react-redux';

import { recieveCurrentModal } from '../../../../actions/ui_actions';

import SettingsDropdown from './settings_dropdown'

const mapStateToProps = (state, ownProps) => ({
    server: ownProps.server
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    recieveCurrentModal: (modal) => dispatch(recieveCurrentModal(modal))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsDropdown)