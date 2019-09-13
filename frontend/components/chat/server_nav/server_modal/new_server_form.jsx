import React from 'react';
import { Link } from 'react-router-dom';

export default class NewServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
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
        console.log(server);
        this.props.createServer(server);
    }

    // handleFormSwitch() {
    //     this.props.clearErrors();
    // }

    render() {
        return (
            <div className="new-server-form-container">
                <h2>create a new server</h2>
                {/* <ul className="errors-list">
                    {this.props.errors ?
                        this.props.errors.map((error, idx) => <li key={idx}><i className="material-icons">
                            report_problem
                        </i><span>{error}</span></li>) :
                        ""}
                </ul> */}
                <form className="new-server-form">
                    <label><span>what's its name?</span>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInput("name")}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>create</button>
                </form>
                <p>this will be a link</p>
            </div>
        )
    }
}