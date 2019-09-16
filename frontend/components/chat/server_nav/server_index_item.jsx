import React from 'react';
import { withRouter } from 'react-router-dom';

class ServerIndexItem extends React.Component {

    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.props.history.replace(`/servers/${this.props.server.id}`)
    }

    render () {
        return (
            <li className="server-index-item tooltip" onClick={this.clickHandler}>
                {!!this.props.server.icon_url ? <img className="server-icon" src={this.props.server.icon_url}></img> : <div className="server-placeholder">{this.props.server.name.slice(0, 1)}
                </div>}
                <span className="tooltip-text">{this.props.server.name}</span>
            </li>
        )
    }
}

export default withRouter(ServerIndexItem)