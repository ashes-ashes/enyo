import React from 'react'

import ServerIndexContainer from './server_nav/server_index_container'

class Chat extends React.Component {
    render() {
        return (
            <div className="chat_window">
                <ServerIndexContainer />
            </div>
        );
    }
}

export default Chat;