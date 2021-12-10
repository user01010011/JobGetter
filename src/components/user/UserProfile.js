import React, { Component } from 'react'; 
// import { userLogIn } from '../../redux/actions/UserAuthentication'; 

import FavoritesBar from '../centerbar/FavoritesBar';

class Profile extends Component {
    state = {
        username: "", 
        password: "",
        first_name: "",
        last_name: "", 
        email: "",
        phone_number: "",
        avatar: "",
        bio: "",
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }; 

    handleEditProfile = (event) => {
        console.log("you clicked edit profile!")
    }

    handleChangePhoto = (event) => {
        console.log("you clicked change photo!")
    }

    render() {
        return (
            <div className="profile-container" id="profile-container">
                    <h4>Welcome, Shasha! :)</h4> 
                    <h4>Did you applied to your favorite jobs today?</h4>
                    <br/>
                <div className="profile-photo" id="profile-photo">
                    <img style={{width: "160px", height:"160px", borderRadius:"80px"}} alt=""
                    src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
                    /><br/>
                    <button className="edit-photo" id="edit-photo" onClick={this.handleChangePhoto}>Change Photo</button>
                </div>
                <br/>
                <div>
                    <div style={{display: "flex", justifyContent:"space-between", width:"50%"}}>
                        <h5>Favorites Jobs </h5>
                        <h5>Jobs Applied </h5>
                    </div>
                    <br/><br/>
                    <div className="profile-info" id="profile-info">
                        <label className="profile-username" id="profile-username" onClick={this.handleEditUsername}>Username: </label><br/><br/>
                        <label className="profile-password" id="profile-password" onClick={this.handleEditPassword}>Password: </label><br/><br/>
                        <label className="profile-bio" id="profile-bio" onClick={this.handleEditBio}>Bio: </label><br/><br/>
                        <label className="profile-frst-name" id="profile-frst-name" onClick={this.handleEditFirstName}>First Name: </label><br/><br/>
                        <label className="profile-last-name" id="profile-last-name" onClick={this.handleEditLastName}>Last Name: </label><br/><br/>                        <label className="profile-email" id="profile-email" onClick={this.handleEditEmail}>Email:</label><br/><br/>
                        <label className="profile-phone" id="profile-phone" onClick={this.handleEditPhone}>Phone Number: </label><br/><br/>
                        <button className="edit-profile" id="edit-profile" onClick={this.handleEditProfile}>Edit Profile</button>
                    </div>
                </div> 
                <br/>
                <div>
                    <FavoritesBar />
                </div> 
            </div>
        )
    }
}


export default Profile