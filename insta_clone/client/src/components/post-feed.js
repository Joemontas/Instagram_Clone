import React, { Component } from 'react';

class PostFeed extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main">
                <h1>Your Instaclone Posts</h1>
                <div className="image"></div>
                <div className="comment-section">
                    <p>Isn't this a beautiful empty square?</p>
                </div>
                <div className="tag-section">
                    <p>Image Tags</p>
                    <p>#Empty</p>
                    <p>#FillerTag</p>
                    <p>#NoFilter</p>
                </div>
                <button className="create-post-button">Create new post</button>
            </div>
        )
    }
}

export default PostFeed;