import React from 'react';

class MessageForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            body: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
    
        this.props.createMessage({
            message: {
            nick: this.props.nick,
            body: this.state.body,
            channel_id: this.props.channelId,
            author_id: this.props.currentUserId  
            }     
        });
        this.setState({body: ""});
    }

    render() {
        return (
            <div className="message-form-container">
                <form className="message-form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.body} onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }

}

export default MessageForm;