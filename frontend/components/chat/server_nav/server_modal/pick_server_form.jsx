import React from 'react';

export default class PickServerForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(type) {
        return (e) => {
            e.preventDefault();
            this.props.receiveCurrentPopup(type);
        }
    }

    render() {

        return (
            <div className="pick-server-form-container">
                <h2>Pick your source</h2>
                <div className="pick-server-button-container">
                    <button onClick={this.handleClick("new")}>Create a server</button>
                    <button onClick={this.handleClick("join")}>Join a server</button>
                </div>
            </div>
        )
    }
}