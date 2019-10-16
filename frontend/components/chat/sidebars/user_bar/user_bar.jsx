import React from 'react';

import User from '../../widgets/user';
import GearOptions from './gear_options';
import AvatarForm from './avatar_form/avatar_form';

class UserBar extends React.Component {

    constructor(props) {
        super(props);

        this.handleGear = this.handleGear.bind(this);
        this.handleAvatar = this.handleAvatar.bind(this);
    }

    handleGear() {
        this.props.toggleModal('gear-options');
    }

    handleAvatar() {
        this.props.toggleModal('avatar-form');
    }

    render() {
        return(
            <div className="user-bar">
                <div className="user-name-container">
                    <div className="user">
                        <div className="avatar-container">
                            <div className="avatar-hover" onClick={this.handleAvatar}></div>
                            <img className="avatar" src={this.props.user.avatar_url ? this.props.user.avatar_url : "defaulticon.png"} />
                            {this.props.currentModal === 'avatar-form' ? 
                            <AvatarForm /> :
                            ""}
                        </div>
                        <span className="username">{this.props.nick || this.props.user.username}</span>
                    </div>
                </div>
                <div className="settings-container">
                    <i className={this.props.currentModal === 'gear-options' ? "material-icons settings-icon active" : "material-icons settings-icon"} onClick={this.handleGear}>settings</i>
                    {this.props.currentModal === 'gear-options' ? <GearOptions /> : "" }
                </div>
            </div>
        )
    }
}

export default UserBar;