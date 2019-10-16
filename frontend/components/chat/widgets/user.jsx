import React, { Component } from 'react'
import { connect } from 'react-redux'

export class User extends Component {

    render() {

        

        return (
            <div className="user">
                <div className="avatar-container">
                    <div className="avatar-hover"></div>
                    <img className="avatar" src={this.props.user.avatar_url ? this.props.user.avatar_url : "defaulticon.png"}/>
                </div>
                <span className="username">{this.props.nick || this.props.user.username}</span>
            </div>
        )
    }
}

export default User;