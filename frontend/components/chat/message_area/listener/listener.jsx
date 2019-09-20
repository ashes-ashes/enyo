import React from 'react';

class Listener extends React.Component {

    constructor(props) {
        super(props);
        this.createSocket = this.createSocket.bind(this);
    }

    componentDidMount() {
        if (this.props.channelId) {
            this.createSocket(this.props.channelId);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.channelId !== prevProps.channelId) {
            if (this.props.channelId) {
                this.createSocket(this.props.channelId);
            }
        }
    }

    createSocket(id) {
        this.msgs = App.cable.subscriptions.create(
            {
                channel: "MessageChannel",
                enyochan: id
            },
            {
                connected: () => {
                    console.log(`Connected!! to ${id}`);
                },
                disconnected: () => {
                    console.log(`Disconnected!! from ${id}`);
                },
                received: data => {
                    let payload = {
                        messages: {
                            [data.message.id]: data.message
                        },
                        user: {
                            [data.user.id]: data.user
                        }
                    }
                    this.props.receiveMessage(payload);
                }
            }
        )

    }

    render() {
        return (
            <div></div>
        )
    }

}

export default Listener;