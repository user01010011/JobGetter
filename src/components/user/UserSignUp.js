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

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.userSignUp(this.state, this.props.history);
  };
  render() {
    return (
      <div className="auth-container">
        <h2 className="auth-header">Sign Up for Job Getter!</h2>
        <form className="auth-form" onSubmit={this.handleOnSubmit}>
          <label className="auth-label">
            <strong>First Name: </strong>
          </label>
          <input
            className="auth-input"
            type="text"
            name="first_name"
            value={this.state.first_name}
            onChange={this.handleOnChange}
          />
          <label className="auth-label">
            <strong>Last Name: </strong>
          </label>
          <input
            className="auth-input"
            type="text"
            name="last_name"
            value={this.state.last_name}
            onChange={this.handleOnChange}
          />
          <label className="auth-label">
            <strong>Email: </strong>
          </label>
          <input
            className="auth-input"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleOnChange}
          />
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
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { userSignUp })(UserSignUp);
