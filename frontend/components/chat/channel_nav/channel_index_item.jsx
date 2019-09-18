import React from 'react';

class ChannelIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <li>
                <span className="channel-name">{this.props.channel.name}</span>
            </li>
        )
    }
}

export default ChannelIndexItem;