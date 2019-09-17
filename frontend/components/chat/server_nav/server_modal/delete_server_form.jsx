import React from 'react';

class DeleteServerForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.server.name === this.state.name) {
            this.props.deleteServer(this.props.server.id);
        } else {
            this.props.receiveFormErrors(["Names do not match."])
        }
    }

    render() {
        return (
            <div className="delete-server-form-container">
                <h2>Are you sure?</h2>
                <p>Type the server's name to confirm.</p>
                <ul className="errors-list">
                    {this.props.errors ?
                        this.props.errors.map((error, idx) => <li key={idx}><i className="material-icons">
                            report_problem
                        </i><span>{error}</span></li>) :
                        ""}
                </ul>
                <form className="delete-server-form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleInput("name")}/>
                    <input type="submit" value="DELETE"/>
                </form>
            </div>
        )
    }
}

export default DeleteServerForm;