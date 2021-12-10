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
                        <label className="profile-username" id="profile-username">Username: </label>
                        <input className="input-username" type="text" name="input-username" value={this.state.username} onChange={this.handleChangeUsername}/><br/><br/>
                        <label className="profile-password" id="profile-password">Password: </label>
                        <input className="input-password" type="text" name="input-password" value={this.state.password} onChange={this.handleChangePassword}/><br/><br/>
                        <label className="profile-bio" id="profile-bio" onClick={this.handleChangeBio}>Bio: </label>
                        <input className="input-bio" type="text" name="input-bio" value={this.state.bio} onChange={this.handleChangeBio}/><br/><br/>
                        <label className="profile-frst-name" id="profile-frst-name">First Name: </label>
                        <input className="input-first-name" type="text" name="input-first-name" value={this.state.first_name} onChange={this.handleChangeFirstName}/><br/><br/>
                        <label className="profile-last-name" id="profile-last-name" onClick={this.handleChangeLastName}>Last Name: </label>
                        <input className="input-last-name" type="text" name="input-last-name" value={this.state.last_name} onChange={this.handleChangeLastName}/><br/><br/>   
                        <label className="profile-email" id="profile-email" onClick={this.handleEditEmail}>Email: </label>
                        <input className="input-email" type="text" name="input-email" value={this.state.email} onChange={this.handleChangeEmail}/><br/><br/>
                        <label className="profile-phone" id="profile-phone" onClick={this.handleChangePhone}>Phone Number: </label>
                        <input className="input-phone" type="text" name="input-phone" value={this.state.phone_number} onChange={this.handleChangePhone}/><br/><br/>
                        <button className="Update-profile" id="Update-profile" onClick={this.handleChangeProfile}>Update Profile</button>
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