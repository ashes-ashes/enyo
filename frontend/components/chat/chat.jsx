import React from 'react';
import { Route } from 'react-router-dom';

import ServerIndexContainer from './server_nav/server_index_container';
import LeftSidebarContainer from './sidebars/left_sidebar_container';
import PopupContainer from './popup_container';
import MainContainer from './main/main_container';

// import ListenerContainer from './message_area/listener/listener_container';

class Chat extends React.Component {

    componentDidMount() {
        this.props.fetchCurrentUser();
    }

    render() {

        return (
            <div>
                <div className="chat-window">
                    <ServerIndexContainer />
                    <Route path="/servers/:serverId" component={LeftSidebarContainer} />
                    <Route path="/servers/:serverId/channels/:channelId" component={MainContainer} />
                </div>
                <PopupContainer />
                {/* <Route path="/servers/:serverId/channels/:channelId" component={ListenerContainer} /> */}
            </div>
        );
    }
}
export default Chat;