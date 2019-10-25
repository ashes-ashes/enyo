import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

export class TopBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="channel-name-box">
                    <i className="material-icons">chat</i>
                    <span className="channel-name">{this.props.channel.name}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    channel: state.entities.channels[ownProps.match.params.channelId]
})

const mapDispatchToProps = {
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar));