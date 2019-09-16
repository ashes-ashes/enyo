import React from 'react';

class IconInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: "",
            imageFile: null
        }
        this.handleUpload = this.handleUpload.bind(this);
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
            <label className="icon-input"><div className="icon-label"><span>upload icon</span></div>
                <input type="file" name="icon-input" className="true-icon-input" accept="image/*" onChange={this.handleUpload}/>
                {!!this.state.imageFile ? <img src={this.state.imageUrl} className="icon-preview"></img> : ""}
            </label>
        )
    }
}

export default IconInput;