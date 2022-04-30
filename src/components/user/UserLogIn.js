import React, { Component } from "react";
import { connect } from "react-redux";

import { userLogIn } from "../../redux/actions/UserAuthentication";

import "./Auth.css";

class UserLogIn extends Component {
  state = {
    username: "",
    password: "",
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.userLogIn(this.state, this.props.history);
  };
  render() {
    return (
      <div className="auth-container">
        <h2 className="auth-header">Log in to Job Getter!</h2>
        <form className="auth-form" onSubmit={this.handleOnSubmit}>
          <label className="auth-label">
            <strong>Username: </strong>
          </label>
          <input
            className="auth-input"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleOnChange}
          />
          <label className="auth-label">
            <strong>Password: </strong>
          </label>
          <input
            className="auth-input"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
          <button className="submit-button" type="submit">
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { userLogIn })(UserLogIn);
