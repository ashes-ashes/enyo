import React from 'react';

export default class ServerIndexItem extends React.Component {
    render () {
        return (
            <li className="server-index-item">
                <div className="server-placeholder">{this.props.server.name.slice(0, 1)}</div>
            </li>
        )
    }
}