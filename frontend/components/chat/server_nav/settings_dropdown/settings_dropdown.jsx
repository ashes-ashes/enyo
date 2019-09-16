import React from 'react';

const SettingsDropdown = (props) => {

    return (
        <ul className="settings-dropdown">
            <li>Invite Code: <span className="invite-code">{props.server.invite_code}</span></li>
            <li>Edit Server</li>
            <li>Delete Server</li>
        </ul>
    )
}

export default SettingsDropdown;