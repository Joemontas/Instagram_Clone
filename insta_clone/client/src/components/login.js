import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main">
                <h1>Welcome to Instaclone!</h1>
                <span><label>Email: </label><input /></span>
                <br/>
                <span><label>Username: </label><input /></span>
                <br/>
                <span><label>Password: </label><input /></span>
                <br/>
                <button>Create Account</button>
                <p>Already have an account? Login below.</p>
                <button>Login</button>
            </div>
        )
    }
}

export default Login;