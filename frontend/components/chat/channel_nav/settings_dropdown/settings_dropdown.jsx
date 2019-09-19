import React from 'react';

class SettingsDropdown extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.props.receiveEditId(this.props.channel.id);
    }

    handleClick(type) {
        return () => {
            this.props.receiveCurrentModal(type);
        }
    }

    render() {
        return (
            <ul className="settings-dropdown">
                {this.props.currentUserId === this.props.serverOwnerId ? <li onClick={this.handleClick("editChannel")}>Edit Channel</li> : ""}
                {this.props.currentUserId === this.props.serverOwnerId ?
                    <li onClick={this.handleClick("deleteChannel")}>Delete Channel</li> :
                    <li>hi</li>
                }
            </ul>
        )
    }
}

export default SettingsDropdown;