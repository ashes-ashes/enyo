import React from 'react';

import User from '../../widgets/user';
import GearOptions from './gear_options';

class UserBar extends React.Component {

    constructor(props) {
        super(props);

        this.handleGear = this.handleGear.bind(this);
        
    }

    handleGear() {
        this.props.toggleModal('gear-options');
    }

    render() {
        return(
            <div className="user-bar">
                <div className="user-name-container">
                    <User user={this.props.user} />
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