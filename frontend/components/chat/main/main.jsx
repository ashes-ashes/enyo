import React from 'react';

import MessageFormContainer from '../message_area/message_form_container';
import MessageIndexContainer from '../message_area/message_index_container';

class Main extends React.Component {

    componentDidMount() {
    }


    render() {

        if (this.props.channel) {
            return (
                <div className="main">
                    <div className="top-bar">
                        <div className="channel-name-box">
                            <i className="material-icons">chat</i>
                            <span className="channel-name">{this.props.channel.name}</span>
                        </div>
                    </div>
                    <div className="channel-display">
                        <div className="message-area">
                            <MessageIndexContainer channelId={this.props.match.params.channelId}/>
                            <MessageFormContainer channelId={this.props.match.params.channelId} serverId={this.props.match.params.serverId}/>
                        </div>
                        <div className="users-index-container">users bar placeholder</div>
                    </div>
                </div>
            )
        } else {
            return (<div className="main"></div>)
        }
    }
}

export default Main;