import React from 'react';
import { Link } from 'react-router-dom';

import ServerIndexItem from './server_index_item';

export default class ServerIndex extends React.Component {

    componentDidMount() {
        this.props.fetchServers();
    }

    render() {

        return (
            <div className="server-index">
                <ul className="server-index-list">
                    {this.props.servers.map((server) => {
                        return <ServerIndexItem server={server} key={server.id}/>
                    })}
                    <li><button className="new-server-button tooltip"><span className="server-placeholder">+</span>
                    <span className="tooltip-text">New Server</span></button>
                    </li>
                </ul>
            </div>
        )
    }
}