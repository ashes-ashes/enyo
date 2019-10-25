import React from 'react';

import { withRouter } from 'react-router-dom';

import ChannelIndexItemContainer from "./channel_index_item_container";
import AddChannelFormContainer from "./add_channel/add_channel_form_container";


class ChannelIndex extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.receiveCurrentModal("addChannel");
    }

    componentDidUpdate(prevProps) {
        if ( this.props.channels.length === 0 ) {
            this.props.fetchServer();
        }
        else if (this.props.channels.length != prevProps.channels.length) {
            this.props.receiveCurrentModal();
        }

        if (this.props.location.pathname === `/servers/${this.props.serverId}` && this.props.channels.length > 0) {
            this.props.history.push(`/servers/${this.props.serverId}/channels/${this.props.lastChannel || this.props.channels[0].id}`)
        }
    }

    render() {
        if (this.props.channels === null) {
            return null;
        };

        let addChannel;

        if (this.props.modal === "addChannel") {
            addChannel = <AddChannelFormContainer serverId={this.props.server.id} />
        } else {
            addChannel = <div className="add-channel-button" onClick={this.handleClick}>
                <i className="material-icons add-channel-icon">add_comment</i>
                <span>Add Channel</span>
            </div>
        };

        return (
            <ul className="channel-index">
                    {this.props.channels[0] ?
                    this.props.channels.map((channel) => (
                        <ChannelIndexItemContainer server={this.props.server} channel={channel} key={channel.id}/>
                    )) :
                    ""}
                    {this.props.currentUserId === this.props.server.owner_id ? 
                        <li className="add-channel">{addChannel}</li> :
                        ""
                    }
            </ul>
        )
    }
}

export default withRouter(ChannelIndex);