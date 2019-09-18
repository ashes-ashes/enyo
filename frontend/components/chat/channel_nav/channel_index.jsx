import React from 'react';


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
        if (this.props.channels.length != prevProps.channels.length) {
            this.props.receiveCurrentModal();
        }
    }

    render() {
        if (this.props.channels === null) {
            return null;
        };
        return (
            <ul className="channel-index">
                    {this.props.channels[0] ?
                    this.props.channels.map((channel) => (
                        <ChannelIndexItemContainer channel={channel} key={channel.id}/>
                    )) :
                    ""}
                    {this.props.modal === "addChannel" ? 
                        <AddChannelFormContainer serverId={this.props.server.id} /> :
                    <li onClick={this.handleClick}>
                        <i className="material-icons add-channel-icon">add_comment</i>
                        <span>Add Channel</span>
                    </li>
                    }
            </ul>
        )
    }
}

export default ChannelIndex;