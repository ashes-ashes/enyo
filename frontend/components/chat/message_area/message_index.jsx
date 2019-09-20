import React from 'react';

import MessageContainer from './message/message_container';

class MessageIndex extends React.Component {

    componentDidMount() {
        this.props.fetchChannel();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.channelId !== this.props.channelId) {
            this.props.fetchChannel();
        }
    }


    render() {
        return (
            <ul className="message-index">
                {this.props.messages.map((message) => 
                    <MessageContainer key={message.id} username={this.props.users[message.author_id].username} message={message}/>
                )}
            </ul>
        )
    }
}

export default MessageIndex;