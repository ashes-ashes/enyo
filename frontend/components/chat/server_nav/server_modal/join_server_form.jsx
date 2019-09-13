import React from 'react';
import { Link } from 'react-router-dom';

export default class JoinServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invite_code: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleFormSwitch = this.handleFormSwitch.bind(this);
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
        let server = Object.assign({}, this.state);
        this.props.createServerMembership(server);
    }

    // handleFormSwitch() {
    //     this.props.clearErrors();
    // }

    render() {
        return (
            <div className="new-server-form-container">
                <h2>join an existing server</h2>
                <ul className="errors-list">
                    {this.props.errors ?
                        this.props.errors.map((error, idx) => <li key={idx}><i className="material-icons">
                            report_problem
                        </i><span>{error}</span></li>) :
                        ""}
                </ul>
                <form className="new-server-form">
                    <label><span>– enter an invite code –</span>
                        <input
                            type="text"
                            value={this.state.invite_code}
                            onChange={this.handleInput("invite_code")}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>join</button>
                </form>
                {/* <p>this will be a link</p> */}
            </div>
        )
    }
}