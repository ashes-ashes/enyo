import React from 'react';

import { withRouter } from 'react-router-dom';

class ChannelIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }


    clickHandler() {
        this.props.history.replace(`/servers/${this.props.match.params.serverId}/channels/${this.props.channel.id}`)
    }

    rightClickHandler(e) {
        e.preventDefault();
        this.props.receiveCurrentModal(`channel-dropdown-${this.props.channel.id}`);
    }

    render () {
        return (
            <li onClick={this.clickHandler}>
                <i className="material-icons">
                    chat_bubble_outline
                </i>
                {/* <span className="hash-icon">#</span> */}
                <span className="channel-name">{this.props.channel.name}</span>
            </li>
        )
    }
}

export default withRouter(ChannelIndexItem);