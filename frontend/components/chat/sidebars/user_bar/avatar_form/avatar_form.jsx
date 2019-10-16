import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateUser } from '../../../../../actions/user_actions';

export class AvatarForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.currentUser.username,
            imageUrl: this.props.currentUser.avatar_url || "defaulticon.png",
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
        formData.append('user[username]', this.state.username);

        if (this.state.imageFile) {
            formData.append('user[avatar]', this.state.imageFile);
        }

        this.props.updateUser(formData, this.props.currentUser.id);
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
            <form className="avatar-form">
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput("username")}
                        />
                    <label className="icon-input"><div className="icon-label"><span>upload avatar</span></div>
                        <input type="file" name="icon-input" className="true-icon-input" accept="image/*" onChange={this.handleUpload} />
                        {!!this.state.imageUrl ? <img src={this.state.imageUrl} className="icon-preview"></img> : ""}
                    </label>
                <button onClick={this.handleSubmit}>change it</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    updateUser: (formData, userId) => dispatch(updateUser(formData, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AvatarForm)
