import React from 'react';

class Message extends React.Component {

    render() {
        return (
            <li key = { this.props.message.id }>
                <div>
                    <span className="nick">{this.props.message.nick || this.props.username}</span>
                    <span className="time-sent">{this.props.message.created_at}</span>
                </div>
                <span className="message-body">{this.props.message.body}</span>
            </li>
        )
    }
}

export default Message;