import React from 'react';

const SettingsDropdown = (props) => {

    return (
        <ul className="settings-dropdown">
            <li>Invite Code: <span className="invite-code">{props.server.invite_code}</span></li>
            {props.currentUserId === props.server.owner_id ? <li>Edit Server</li> : ""}
            {props.currentUserId === props.server.owner_id ? <li>Delete Server</li> : <li>Leave Server</li>}
        </ul>
    )
}

export default SettingsDropdown;