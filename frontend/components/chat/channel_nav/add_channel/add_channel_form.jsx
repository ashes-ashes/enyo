import React from 'react';

class AddChannelForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
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
        this.props.receiveCurrentModal("");
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createChannel(this.state.name, this.props.serverId);
    }

    render() {


        return(
            <div className="add-channel-form-container">
                <form className="add-channel-form" onSubmit={this.handleSubmit}>
                    <i className="material-icons add-channel-icon">add_comment</i>
                    <input autoFocus type="text" value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} />
                </form>
            </div>
        );
    }
};

export default AddChannelForm;