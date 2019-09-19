import React from 'react';

import MessageFormContainer from '../message_area/messsage_form_container';

class Main extends React.Component {


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
                            <div>message index placeholder</div>
                            <MessageFormContainer />
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