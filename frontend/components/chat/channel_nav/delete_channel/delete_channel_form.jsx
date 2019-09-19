import React from 'react';

class DeleteChannelForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.deleteChannel(this.props.channel.id);
    }

    render() {
        return (
            <div className="delete-server-form-container">
                <h2>Are you sure?</h2>
                <p>You can't undo this.</p>
                <ul className="errors-list">
                    {this.props.errors ?
                        this.props.errors.map((error, idx) => <li key={idx}><i className="material-icons">
                            report_problem
                        </i><span>{error}</span></li>) :
                        ""}
                </ul>
                <button onClick={this.handleSubmit}>Delete {this.props.channel.name}</button>
            </div>
        )
    }
}

export default DeleteChannelForm;