import React from 'react';

import UserContainer from '../../widgets/user_container';

class Message extends React.Component {

    render() {
        return (
            <li key = { this.props.message.id } className="message">
                <div className="message-info">
                    <UserContainer user={this.props.user} nick={this.props.message.nick}/>
                    <span className="time-sent">{this.props.message.created_at.match(/\d\d:\d\d/)}</span>
                </div>
                <span className="message-body">{this.props.message.body}</span>
            </li>
        )
    }
}

export default Message;