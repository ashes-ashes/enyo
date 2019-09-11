import React from 'react';

export default class ServerIndexItem extends React.Component {
    render () {
        return (
            <li>
                {this.props.server.id}
            </li>
        )
    }
}