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
      <div className="page-wrapper">
        <h2 className="header">Sign Up for Job Getter!</h2>
        <form className="auth-form" onSubmit={this.handleOnSubmit}>
          <label className="form-label">First Name:</label>
          <input
            className="form-input"
            type="text"
            name="first_name"
            value={this.state.first_name}
            onChange={this.handleOnChange}
          />
          <label className="form-label">Last Name:</label>
          <input
            className="form-input"
            type="text"
            name="last_name"
            value={this.state.last_name}
            onChange={this.handleOnChange}
          />
          <label className="form-label">Email:</label>
          <input
            className="form-input"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleOnChange}
          />
          <label className="form-label">Username:</label>
          <input
            className="form-input"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleOnChange}
          />
          <label className="form-label">Password:</label>
          <input
            className="form-input"
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
