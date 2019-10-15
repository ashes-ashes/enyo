import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CompactMessage extends Component {
    render() {
        return (
            <li key={this.props.message.id} className="message compact-message">
                <span className="message-body">{this.props.message.body}</span>
            </li>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CompactMessage)
