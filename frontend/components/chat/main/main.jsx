import React from 'react';

import TopBar from './top_bar';

import MessageFormContainer from '../message_area/message_form_container';
import MessageIndexContainer from '../message_area/message_index_container';

import RightSidebarContainer from '../sidebars/right_sidebar_container';

class Main extends React.Component {

    componentDidMount() {
    }


    render() {

        if (this.props.channel) {
            return (
                <div className="main">
                    <TopBar />
                    <div className="channel-display">
                        <div className="message-area">
                            <MessageIndexContainer channelId={this.props.match.params.channelId}/>
                            <MessageFormContainer channelId={this.props.match.params.channelId} serverId={this.props.match.params.serverId}/>
                        </div>
                        <RightSidebarContainer />
                    </div>
                </div>
            )
        } else {
            return (<div className="main"></div>)
        }
    }
}

export default Main;