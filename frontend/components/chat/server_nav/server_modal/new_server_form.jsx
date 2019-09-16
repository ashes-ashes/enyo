import React from 'react';
import { Link } from 'react-router-dom';

export default class NewServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            imageUrl: "",
            imageFile: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
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

        let formData = new FormData();
        formData.append('server[name]', this.state.name);
        
        if (this.state.imageFile) {
            formData.append('server[icon]', this.state.imageFile);
        }

        this.props.createServer(formData);
    }

    handleUpload(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => {
            this.setState({ imageUrl: reader.result, imageFile: file });
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }

    }


    render() {
        return (
            <div className="new-server-form-container">
                <h2>create a new server</h2>
                <ul className="errors-list">
                    {this.props.errors ?
                        this.props.errors.map((error, idx) => <li key={idx}><i className="material-icons">
                            report_problem
                        </i><span>{error}</span></li>) :
                        ""}
                </ul>
                <form className="new-server-form">
                    <div className="side-by-side">
                        <label><span>what's its name?</span>
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.handleInput("name")}
                            />
                        </label>
                        <label className="icon-input"><div className="icon-label"><span>upload icon</span></div>
                            <input type="file" name="icon-input" className="true-icon-input" accept="image/*" onChange={this.handleUpload} />
                            {!!this.state.imageFile ? <img src={this.state.imageUrl} className="icon-preview"></img> : ""}
                        </label>
                    </div>
                    <button onClick={this.handleSubmit}>create</button>
                </form>
            </div>
        )
    }
}