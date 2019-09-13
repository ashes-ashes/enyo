import React from 'react';

import NewServerFormContainer from './new_server_form_container';
import JoinServerFormContainer from './join_server_form_container';

export default class PickServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formType: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(type) {
        return (e) => {
            e.preventDefault();
            this.setState({formType: type});
        }
    }


    render() {

        let form;

        switch (this.state.formType) {
            case "new":
                form = <NewServerFormContainer />;
                break;
            case "join":
                form = <JoinServerFormContainer />;
                break;
            default:
                form = (<div className="pick-server-form-container">
                    <h2>Pick your source</h2>
                    <div className="pick-server-button-container">
                        <button onClick={this.handleClick("new")}>Create a server</button>
                        <button onClick={this.handleClick("join")}>Join a server</button>
                    </div>
                </div>);
                break;
        };

        console.log(form);

        return (
            <div className="server-form">
                {form}
                <div className="server-form-backdrop" onClick={this.props.hideForm}></div>
            </div>
        )
    }
}