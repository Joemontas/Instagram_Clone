import React, { Component } from 'react';

class ImageUpload extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main">
                <h1>Upload your image below</h1>
                <br/>
                <button>Upload your image</button>
                <p>Add your comments!</p>
                <p>Add your tags!</p>
            </div>
        )
    }
}

export default ImageUpload;