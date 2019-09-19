import React from 'react';

class MessageForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body: ""
        }
    }

    handleChange(e) {
        this.setState({
            body: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
    
        this.props.createMessage({
            nick: this.props.nick,
            body: this.state.body,
            channelId: this.props.channelId,
            authorId: this.props.currentUserId       
        });
        this.setState({body: ""});
    }

    render() {
        return (
            <div className="message-form-container">
                <form className="message-form">
                    <input type="text" value={this.state.body} onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }

}

export default MessageForm;