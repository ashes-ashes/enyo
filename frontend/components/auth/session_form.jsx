import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormSwitch = this.handleFormSwitch.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    handleDemoLogin(e) {
        e.preventDefault();
        let user = {
            email: "seer@gaia.net",
            password: "seesall"
        };
        this.props.processForm(user);
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleFormSwitch() {
        this.props.clearErrors();
    }

    render() {
        let { formType } = this.props;

        return (
            <div className="session-form-backdrop">
            <div className="session-form-container">
                    <h2>{formType === 'login' ? "log in" : "sign up"}</h2>
                <ul className="errors-list">
                    {this.props.errors ?
                            this.props.errors.map((error, idx) => <li key={idx}><i className="material-icons">
                                report_problem
                            </i><span>{error}</span></li>) :
                        ""}
                </ul>
                <form className="session-form">
                    {this.props.formType === 'signup' ? 
                        <label><span>Username</span>
                            <input
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput("username")}
                            />
                        </label> :
                        ""
                    }
                    <label><span>Email</span>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput("email")}
                        />
                    </label>
                    <label><span>Password</span>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput("password")}
                        />
                    </label>
                    <div className="sessionButtons">
                        <button onClick={this.handleSubmit}>{formType === 'login' ? "log in" : "create account"}</button>
                        {this.props.formType === 'login' ?
                            <button className="demo-button" onClick={this.handleDemoLogin}>demo</button> :
                            ""
                        }
                    </div>
                </form>
                <p><Link to={formType === 'login' ? "/signup" : "/login"} onClick={this.handleFormSwitch}>{formType === 'login' ? "oh no i don't have an account" : "wait, i already have one of these"}</Link></p>
            </div>
            </div>
        )
    }
}