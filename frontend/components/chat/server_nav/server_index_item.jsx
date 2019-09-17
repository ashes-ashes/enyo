import React from 'react';
import { withRouter } from 'react-router-dom';
import SettingsDropdownContainer from './settings_dropdown/settings_dropdown_container';

class ServerIndexItem extends React.Component {

    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
        this.rightClickHandler = this.rightClickHandler.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
    }

    clickHandler() {
        this.props.history.replace(`/servers/${this.props.server.id}`)
    }

    rightClickHandler(e) {
        e.preventDefault();
        this.props.receiveCurrentModal(`server-dropdown-${this.props.server.id}`);
    }

    closeDropdown(e) {
        e.stopPropagation();
        this.props.receiveCurrentModal("");
    }

    render () {
        return (
            <li className="server-index-item tooltip" onClick={this.clickHandler} onContextMenu={this.rightClickHandler}>
                {!!this.props.server.icon_url ? <img className="server-icon" src={this.props.server.icon_url}></img> : <div className="server-placeholder">{this.props.server.name.slice(0, 1)}
                </div>}
                {this.props.modal === `server-dropdown-${this.props.server.id}` 
                ? 
                <div>
                    <div className="dropdown-backdrop" onClick={this.closeDropdown}></div>
                    <SettingsDropdownContainer server={this.props.server}/> 
                </div>
                
                : 
                <span className="tooltip-text">{this.props.server.name}</span>}
            </li>
        )
    }
}

export default withRouter(ServerIndexItem)