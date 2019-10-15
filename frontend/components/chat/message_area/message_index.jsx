import React from 'react';

import MessageContainer from './message/message_container';
import CompactMessage from './message/compact_message';

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

        let lastAuthor = null;

        let messageArr = this.props.messages.map((message) => {
            if (message.author_id !== lastAuthor) {
                lastAuthor = message.author_id;
                return <MessageContainer key={message.id} user={this.props.users[message.author_id]} message={message} />;
            } else {
                return <CompactMessage key={message.id} user={this.props.users[message.author_id]} message={message} />;
            }
        })

        return (
            <ul className="message-index">
                {messageArr}
            </ul>
        )
    }
}

export default MessageIndex;