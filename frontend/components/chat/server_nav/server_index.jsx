import React from 'react';
import { Link } from 'react-router-dom';

import ServerIndexItem from './server_index_item';
import PickServerForm from './server_modal/pick_server_form';

export default class ServerIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showForm: false
        }
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }

    componentDidMount() {
        this.props.fetchServers();
    }

    showForm() {
        this.setState({
            showForm: true
        })
    }

    hideForm() {
        this.setState({
            showForm: false
        })
    }

    render() {

        return (
            <div className="server-index">
                <ul className="server-index-list">
                    {this.props.servers.map((server) => {
                        return <ServerIndexItem server={server} key={server.id}/>
                    })}
                    <li><button className="new-server-button tooltip" onClick={this.showForm}><span className="server-placeholder">+</span>
                    <span className="tooltip-text">Add Server</span></button>
                    </li>
                </ul>
                {this.state.showForm ? <PickServerForm hideForm={this.hideForm}/> : ""}
            </div>
        )
    }
}