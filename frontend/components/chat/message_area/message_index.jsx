import React from 'react';

class MessageIndex extends React.Component {

    componentDidMount() {
        this.props.fetchChannel();
    }

    render() {
        return (
            <ul className="message-index">
                {this.props.messages.map((message) => 
                    <li key={message.id}>
                        <span className="nick">{message.nick || this.props.users[message.author_id].username}: </span>
                        <span className="message-body">{message.body}</span>
                    </li>
                )}
            </ul>
        )
    }
}

export default MessageIndex;