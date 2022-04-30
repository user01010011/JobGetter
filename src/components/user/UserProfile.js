import React, { Component } from "react";
// import { userLogIn } from '../../redux/actions/UserAuthentication';
import UserResume from "./UserResume";
import "./Profile.css";

class UserProfile extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    avatar: "",
    bio: "",
    showEditPhoto: false,
    showPhotoForm: false,
    showProfileForm: false,
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  hoverPhoto = () => {
    this.setState({ showEditPhoto: true });
  };

  leavePhoto = () => {
    this.setState({ showEditPhoto: false });
  };

  handleChangePhoto = () => {
    console.log("you clicked change photo!");
    this.setState((prevState) => ({
      showPhotoForm: !prevState.showPhotoForm,
    }));
  };

  handleEditProfile = () => {
    console.log("you clicked edit profile!");
    this.setState((prevState) => ({
      showProfileForm: !prevState.showProfileForm,
    }));
  };

  render() {
    return (
      <div className="userprofile">
        {/* <h2 className="header">My Profile</h2> */}
        <div className="userprofile-top">
          <div className="userprofile-photo-container">
            <img
              className="userprofile-photo"
              onClick={this.handleChangePhoto}
              onMouseEnter={this.hoverPhoto}
              onMouseLeave={this.leavePhoto}
              alt="User Profile"
              src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            />
            {this.state.showEditPhoto ? (
              <div className="photo-overlay">
            
                <button
                  className="edit-photo-button"
                  onClick={this.handleChangePhoto}
                >
                  Change Photo
                </button>
              </div>
            ) : (
              ""
            )}
            {this.state.showPhotoForm ?
            <div className="update-photo-container">
                <form className="photo-form">
                    <label className="form-label">Photo Url:</label>
                    <input className="form-input" type="text" id="input-photo"/>
                </form>
                <span className="photo-actions">
                    <button className="update-photo-button">Update</button>
                    <button className="cancel-photo-button" onClick={this.handleChangePhoto}>Cancel</button>
                </span>

            </div>
        :
        ""
        }
          </div>
        </div>
        <div className="userprofile-main">
          {this.state.showProfileForm ? (
            "Save changes to your profile below"
          ) : (
            <button className="edit-button" onClick={this.handleEditProfile}>
              Edit Profile
            </button>
          )}
          {this.state.showProfileForm ? (
            <form className="userprofile-form">
              <label className="form-label" id="profile-username">
                Username:{" "}
              </label>
              <input
                className="form-input"
                type="text"
                id="input-username"
                placeholder={this.state.username}
                onChange={this.handleChangeUsername}
              />
              <label className="form-label" id="profile-password">
                Password:{" "}
              </label>
              <input
                className="form-input"
                type="text"
                id="input-password"
                placeholder={this.state.password}
                onChange={this.handleChangePassword}
              />
              <label className="form-label" id="profile-bio">
                Bio:{" "}
              </label>
              <input
                className="form-input"
                type="text"
                name="input-bio"
                placeholder={this.state.bio}
                onChange={this.handleChangeBio}
              />
              <label className="form-label" id="profile-frst-name">
                First Name:{" "}
              </label>
              <input
                className="form-input"
                type="text"
                id="input-first-name"
                placeholder={this.state.last_name}
                onChange={this.handleChangeLastName}
              />
              <label className="form-label" id="profile-email">
                Email:{" "}
              </label>
              <input
                className="form-input"
                type="text"
                id="input-email"
                placeholder={this.state.email}
                onChange={this.handleChangeEmail}
              />
              <label className="form-label" id="profile-phone">
                Phone Number:{" "}
              </label>
              <input
                className="form-input"
                type="text"
                id="input-phone"
                placeholder={this.state.phone_number}
                onChange={this.handleChangePhone}
              />
              <span className="form-actions">
                <button
                  className="submit-button"
                  id="userprofile-cancel-btn"
                  type="submit"
                  onClick={this.handleEditProfile}
                >
                  Cancel
                </button>
                <button
                  className="submit-button"
                  id="userprofile-submit-btn"
                  type="submit"
                  onClick={this.handleSaveProfile}
                >
                  Save Profile
                </button>
              </span>
            </form>
          ) : (
            <div className="userprofile-info">
              <div className="userprofile-item">
                <span className="item-label">Username: </span>
                <span className="item-value">{this.state.username}</span>
              </div>
              <div className="userprofile-item">
                <span className="item-label">Password: </span>
                <span className="item-value">{this.state.password}</span>
              </div>
              <div className="userprofile-item">
                <span className="item-label">Bio: </span>
                <span className="item-value">{this.state.bio}</span>
              </div>
              <div className="userprofile-item">
                <span className="item-label">First Name: </span>
                <span className="item-value">{this.state.first_name}</span>
              </div>
              <div className="userprofile-item">
                <span className="item-label">Last Name: </span>
                <span className="item-value">{this.state.last_name}</span>
              </div>
              <div className="userprofile-item">
                <span className="item-label">Email: </span>
                <span className="item-value">{this.state.email}</span>
              </div>
              <div className="userprofile-item">
                <span className="item-label">Phone: </span>
                <span className="item-value">{this.state.phone}</span>
              </div>
            </div>
          )}

          {/* <div className="userprofile-edit-each">
            <div className="userprofile-item">
              <label className="form-label" id="profile-username">
                Username:{" "}
              </label>
              <input
                className="form-input"
                type="text"
                name="user-username"
                value={this.state.username}
                onChange={this.handleOnChange}
              />
            </div>
            <div className="userprofile-item">
              <label className="form-label" id="profile-password">
                Password:{" "}
              </label>
              <input
                className="form-input"
                type="text"
                name="user-password"
                value={this.state.password}
                onChange={this.handleOnChange}
              />
              <button className="edit-btn" onClick={this.handleEditPassword}>
                Edit
              </button>
            </div>
            <div className="userprofile-item">
              <label className="form-label" id="profile-bio">
                Bio:{" "}
              </label>
              <input
                className="form-input"
                type="text"
                name="user-bio"
                value={this.state.bio}
                onChange={this.handleOnChange}
              />
              <button className="edit-btn" onClick={this.handleEditBio}>
                Edit
              </button>
            </div>
            <div className="userprofile-item">
              <label className="form-label" id="profile-frst-name">
                First Name:{" "}
              </label>
              <input
                className="form-input"
                type="text"
                name="user-first-name"
                value={this.state.first_name}
                onChange={this.handleOnChange}
              />
              <button
                className="edit-first-name-btn"
                onClick={this.handleEditFirstName}
              >
                Edit
              </button>
            </div>
            <div className="userprofile-item">
              <label className="form-label" id="profile-last-name">
                Last Name:{" "}
              </label>
              <input
                className="form-input"
                type="text"
                name="user-last-name"
                value={this.state.last_name}
                onChange={this.handleOnChange}
              />
              <button
                className="edit-last-name-btn"
                onClick={this.handleEditLastName}
              >
                Edit
              </button>
            </div>
            <div className="userprofile-item">
              <label className="form-label" id="profile-email">
                Email:{" "}
              </label>
              <input
                className="form-input"
                type="text"
                name="user-email"
                value={this.state.email}
                onChange={this.handleOnChange}
              />
              <button className="edit-email-btn" onClick={this.handleEditEmail}>
                Edit
              </button>
            </div>
            <div className="userprofile-item">
              <label className="form-label" id="profile-phone">
                Phone Number:{" "}
              </label>
              <input
                className="form-input"
                type="text"
                name="user-phone"
                value={this.state.phone_number}
                onChange={this.handleOnChange}
              />
              <button className="edit-phone-btn" onClick={this.handleEditPhone}>
                Edit
              </button>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default UserProfile;
