import React from 'react'

import ServerIndexContainer from './server_nav/server_index_container'
import ModalContainer from './modal_container'

class Chat extends React.Component {

    render() {
        return (
            <div>
                <div className="chat_window">
                    <ServerIndexContainer />
                </div>
                <ModalContainer />
            </div>
        );
    }
}

export default Chat;