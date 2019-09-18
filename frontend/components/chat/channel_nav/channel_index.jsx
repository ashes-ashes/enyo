import React from 'react';


import ChannelIndexItemContainer from "./channel_index_item_container";


class ChannelIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        if (this.props.channels[0] === undefined) {
            this.props.fetchServer();
        }
    }

    render() {

        return (
            <ul className="channel-index">
                    {this.props.channels[0] ?
                    this.props.channels.map((channel) => (
                        <ChannelIndexItemContainer key={channel.id} channel={channel} />
                    )) :
                    <li>Loading...</li>}
            </ul>
        )
    }
}

export default ChannelIndex;