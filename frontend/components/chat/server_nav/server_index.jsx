import React from 'react';

import ServerIndexItem from './server_index_item';

export default class ServerIndex extends React.Component {

    componentDidMount() {
        this.props.fetchServers();
    }

    render() {

        return (
            <div>
                <ul>
                    {this.props.servers.map((server) => {
                        return <ServerIndexItem server={server} key={server.id}/>
                    })}
                </ul>
            </div>
        )
    }
}