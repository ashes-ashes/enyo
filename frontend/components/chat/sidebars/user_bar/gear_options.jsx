import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { receiveCurrentModal } from '../../../../actions/ui_actions';
import { logout } from '../../../../actions/session_actions';

export class GearOptions extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ul className="gear-dropdown">
                <li>Settings...</li>
                <li className="logout-link" onClick={this.props.logout}>Log Out</li>
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    receiveCurrentModal: (modal) => dispatch(receiveCurrentModal(modal)),
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(GearOptions)
