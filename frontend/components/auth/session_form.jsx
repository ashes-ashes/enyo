import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
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
            <div>
                <h2>{this.props.formType}</h2>
                <ul>
                    {this.state.errors ?
                        errors.map((error) => <li>{error}</li>) :
                        ""}
                </ul>
                <form>
                    <label>Username
            <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput("username")}
                        />
                    </label>
                    <label>Password
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
        )
    }
}