import React from 'react';

import ChannelIndexContainer from '../channel_nav/channel_index_container'

class LeftSidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchServer();
    }

    render() {

        console.log(this.props);
        return (
            <div className="left-sidebar-container">
                {this.props.server ? 
                <div className="left-sidebar">
                    <div>{this.props.server.name}</div>
                    <ChannelIndexContainer server={this.props.server}/>
                    <div>Placeholder</div>
                </div> :
                ""
                }
            </div>
        )
    }
}

export default LeftSidebar;