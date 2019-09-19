import React from 'react';

class UserBar extends React.Component {

    render() {
        return(
            <div className="user-bar">
                <div className="user-name-container">
                    <i className="material-icons">person</i>
                    <span className="user-name">{this.props.user.username}</span>
                </div>
                <div>
                    <i className="material-icons settings-icon">settings</i>
                </div>
            </div>
        )
    }
}

export default UserBar;