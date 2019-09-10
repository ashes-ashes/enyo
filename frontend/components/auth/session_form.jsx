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
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        let { formType } = this.props;

        return (
            <div className="session-form-backdrop">
            <div className="session-form-container">
                <h2>{this.props.formType}</h2>
                <ul className="errors-list">
                    {this.props.errors ?
                        this.props.errors.map((error) => <li>{error}</li>) :
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
                    <button onClick={this.handleSubmit}>{formType}</button>
                </form>
                <Link to={formType === 'login' ? "/signup" : "/login"}>{formType === 'login' ? "sign up" : "log in"}</Link>
            </div>
            </div>
        )
    }
}