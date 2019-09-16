import React from 'react';
import { Link } from 'react-router-dom';

import ServerIndexItemContainer from './server_index_item_container';

export default class ServerIndex extends React.Component {

    constructor(props) {
        super(props);

        this.setModal = this.setModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchServers();
    }


    componentDidUpdate(prevProps) {
        if (prevProps.servers.length != this.props.servers.length)
        this.props.receiveCurrentModal();
    }

    setModal() {
        this.props.receiveCurrentModal("pick")
    }

    render() {

        return (
            <div className="server-index">
                <ul className="server-index-list">
                    {this.props.servers.map((server) => {
                        return <ServerIndexItemContainer server={server} key={server.id}/>
                    })}
                    <li><button className="new-server-button tooltip" onClick={this.setModal}><span className="server-placeholder">+</span>
                    <span className="tooltip-text">Add Server</span></button>
                    </li>
                </ul>
            </div>
        )
    }
}