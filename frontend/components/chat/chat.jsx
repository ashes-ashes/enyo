import React from 'react'

import ServerIndexContainer from './server_nav/server_index_container'
import PopupContainer from './popup_container'

class Chat extends React.Component {

    componentDidMount() {
        this.props.fetchCurrentUser();
    }

    render() {

        return (
            <div>
                <div className="chat_window">
                    <ServerIndexContainer />
                </div>
                <PopupContainer />
            </div>
        );
    }
}

export default Chat;