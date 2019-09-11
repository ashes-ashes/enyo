import React from 'react';
import server_index_container from './server_index_container';

export default class ServerIndexItem extends React.Component {
    render () {
        <li>
            {this.props.server.id}
        </li>
    }
}