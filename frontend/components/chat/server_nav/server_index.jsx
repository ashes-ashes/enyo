import React from 'react';

export default class BenchIndex extends React.Component {
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