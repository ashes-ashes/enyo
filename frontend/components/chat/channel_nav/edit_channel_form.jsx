import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateChannel } from '../../../actions/channel_actions';
import { receiveCurrentModal } from '../../../actions/ui_actions';

export class EditChannelForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.channel.name
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }


    handleChange(e) {
        e.preventDefault();
        this.setState({
            name: e.currentTarget.value
        })
    }

    handleBlur() {
        this.props.receiveCurrentModal(null);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateChannel({channel: {name: this.state.name}}, this.props.channel.id);
    }

    render() {

        return (
            <div className="edit-channel-form-container">
                <form className="edit-channel-form" onSubmit={this.handleSubmit}>
                    <i className="material-icons chat-icon">
                        chat_bubble_outline
                    </i>
                    <input autoFocus type="text" value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    modal: state.ui.currentModal
})

const mapDispatchToProps = (dispatch) => ({
    receiveCurrentModal: (modal) => dispatch(receiveCurrentModal(modal)),
    updateChannel: (data, channelId) => dispatch(updateChannel(data, channelId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditChannelForm)
