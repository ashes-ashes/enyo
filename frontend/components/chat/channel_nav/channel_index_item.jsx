import React from 'react';

import { withRouter } from 'react-router-dom';

import SettingsDropdownContainer from './settings_dropdown/settings_dropdown_container';

class ChannelIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.rightClickHandler = this.rightClickHandler.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
    }


    clickHandler() {
        this.props.history.replace(`/servers/${this.props.match.params.serverId}/channels/${this.props.channel.id}`)
    }

    rightClickHandler(e) {
        e.preventDefault();
        this.props.receiveCurrentModal(`channel-dropdown-${this.props.channel.id}`);
    }

    closeDropdown(e) {
        e.stopPropagation();
        this.props.receiveCurrentModal();
    }

    render () {
        return (
            <li className="channel-index-item tooltip" onClick={this.clickHandler} onContextMenu={this.rightClickHandler}>
                <div className="channel-label">
                    <i className="material-icons chat-icon">
                        chat_bubble_outline
                    </i>
                    {/* <span className="hash-icon">#</span> */}
                    <span className="channel-name">{this.props.channel.name}</span>
                </div>
                {this.props.server.owner_id === this.props.currentUserId
                    ?
                    <div className="settings-icon-container">
                        <i className="material-icons">
                            edit
                        </i>
                        <i className="material-icons delete-button">
                            delete
                        </i>
                    </div>
                    :
                    ""}
                {/* {this.props.modal === `channel-dropdown-${this.props.channel.id}`
                    ?
                    <div>
                        <div className="dropdown-backdrop" onClick={this.closeDropdown}></div>
                        <SettingsDropdownContainer channel={this.props.channel} serverId={this.props.match.params.serverId} />
                    </div>
                    :
                    ""} */}
            </li>
        )
    }
}

export default withRouter(ChannelIndexItem);