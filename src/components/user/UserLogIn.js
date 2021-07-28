import React, { Component } from "react";
import { connect } from "react-redux";

import { userLogIn } from "../../redux/actions/UserAuthentication";

class UserLogIn extends Component {   
    state = {
        username: "",
        password: "",
    };

    handleOnChange = event => {
        this.setState({
                [event.target.name]: event.target.value
            }
        );
    };

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.userLogIn(this.state, this.props.history)
    }
    render() {
        return (
            <div className="log-in" style={{position: "fixed", top: "180px"}}>
                <form onSubmit={this.handleOnSubmit}>
                    <label className="label has-text-white"><strong>Username:</strong></label>
                    <input className="input" type="text" name="username" value={this.state.username} onChange={this.handleOnChange} />
                    <label className="label has-text-white"><strong>Password:</strong></label>
                    <input className="input" type="password" name="password" value={this.state.password} onChange={this.handleOnChange} />
                    <br />
                    <button className="button is-link" type="submit">Log In</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { userLogIn })(UserLogIn);