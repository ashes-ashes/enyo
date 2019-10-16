import React from 'react';

class SettingsDropdown extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.props.receiveEditId(this.props.server.id);
    }

    handleClick(type) {
        return () => {
            this.props.receiveCurrentModal(type);
        }
    }

    render () {
        return (
            <ul className="server-dropdown">
                <li>Invite Code: <span className="invite-code">{this.props.server.invite_code}</span></li>
                {this.props.currentUserId === this.props.server.owner_id ? <li onClick={this.handleClick("editServer")}>Edit Server</li> : ""}
                {this.props.currentUserId === this.props.server.owner_id ? 
                    <li onClick={this.handleClick("deleteServer")}>Delete Server</li> : 
                    <li onClick={this.handleClick("leaveServer")}>Leave Server</li>
                }
            </ul>
        )
    }
}

export default SettingsDropdown;