import React, { Component } from "react";
import { connect } from "react-redux";

import { userSignUp } from "../../redux/actions/UserAuthentication";

class UserSignUp extends Component {
    state = {
        first_name: "",
        last_name: "",
        email: "",
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
        this.props.userSignUp(this.state, this.props.history);
    }
    render() {
        return (
            <div className="sign-up" style={{position: "fixed", top: "180px"}}>
                <h2>Sign Up for Job Getter!</h2>
                <br/>
                <form onSubmit={this.handleOnSubmit}>
                    <label className="label has-text-white"><strong>First Name: </strong></label>
                    <input className="input" type="text" name="first_name" value={this.state.first_name} onChange={this.handleOnChange}/>
                    <br/><br/>
                    <label className="label has-text-white"><strong>Last Name: </strong></label>
                    <input className="input" type="text" name="last_name" value={this.state.last_name} onChange={this.handleOnChange}/>
                    <br/><br/>
                    <label className="label has-text-white"><strong>Email: </strong></label>
                    <input className="input" type="text" name="email" value={this.state.email} onChange={this.handleOnChange}/>
                    <br/><br/>
                    <label className="label has-text-white"><strong>Username: </strong></label>
                    <input className="input" type="text" name="username" value={this.state.username} onChange={this.handleOnChange}/>
                    <br/><br/>
                    <label className="label has-text-white"><strong>Password: </strong></label>
                    <input className="input" type="password" name="password" value={this.state.password} onChange={this.handleOnChange}/>
                    <br/>
                    <br/>
                    <button className="button is-link" type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { userSignUp })(UserSignUp);