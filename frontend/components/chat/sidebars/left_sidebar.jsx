import React from 'react';

import ChannelIndexContainer from '../channel_nav/channel_index_container'
import UserBarContainer from './user_bar/user_bar_container'

class LeftSidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchServer();
    }

    render() {
 
        return (
            <div className="left-sidebar-container">
                {this.props.server ? 
                <div className="left-sidebar">
                    <div className="server-name-box">
                        <span className="server-name">{this.props.server.name}</span>
                    </div>
                    <ChannelIndexContainer serverId={this.props.server.id} server={this.props.server}/>
                    <UserBarContainer />
                </div> :
                ""
                }
            </div>
        )
    }
}

export default LeftSidebar;