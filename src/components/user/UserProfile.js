import React, { Component } from 'react'; 
// import { userLogIn } from '../../redux/actions/UserAuthentication'; 
import UserResume from "./UserResume";


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

    handleChangePhoto = (event) => {
        console.log("you clicked change photo!")
    }

    handleEditUsername = (event) => {
        console.log("you clicked edit username!")
    }

    handleEditPassword = (event) => {
        console.log("you clicked edit password!")
    }

    handleEditBio = (event) => {
        console.log("you clicked edit bio!")
    }

    handleEditFirstName = (event) => {
        console.log("you clicked edit first_name!")
    }

    handleEditLastName = (event) => {
        console.log("you clicked edit last_name!")
    }

    handleEditPhone = (event) => {
        console.log("you clicked edit phone_number!")
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
                    <div className="user-jobs-info" style={{display: "flex", justifyContent:"space-between", width:"50%"}}>
                        <h5>Favorites Jobs </h5>
                        <h5>Jobs Applied </h5>
                    </div>
                    <br/><br/>
                    <div className="profile-info" id="profile-info">
                        <div className="user-profile-info">
                            <div className="user-profile-username" style={{display: "flex", justifyContent:"space-between", width:"30%"}}>
                                <label className="user-username" id="profile-username">Username: </label>
                                <input className="user-username-input" type="text" name="user-username" value={this.state.username}/>
                                <button className="edit-username-btn" onClick={this.handleEditUsername}>Edit</button>
                            </div><br/>
                            <div className="user-profile-username" style={{display: "flex", justifyContent:"space-between", width:"30%"}}>
                                <label className="profile-password" id="profile-password">Password: </label>
                                <input className="user-password" type="text" name="user-password" value={this.state.password}/>
                                <button className="edit-password-btn" onClick={this.handleEditPassword}>Edit</button>
                            </div><br/>
                            <div className="user-profile-bio" style={{display: "flex", justifyContent:"space-between", width:"30%"}}>
                                <label className="profile-bio" id="profile-bio">Bio: </label>
                                <input className="user-bio" type="text" name="user-bio" value={this.state.bio}/>
                                <button className="edit-bio-btn" onClick={this.handleEditBio}>Edit</button>
                            </div><br/>
                            <div className="user-profile-first-name" style={{display: "flex", justifyContent:"space-between", width:"30%"}}>
                                <label className="profile-frst-name" id="profile-frst-name">First Name: </label>
                                <input className="user-first-name" type="text" name="user-first-name" value={this.state.first_name}/>
                                <button className="edit-first-name-btn" onClick={this.handleEditFirstName}>Edit</button>
                            </div><br/>
                            <div className="user-profile-last-name" style={{display: "flex", justifyContent:"space-between", width:"30%"}}>
                                <label className="profile-last-name" id="profile-last-name">Last Name: </label>
                                <input className="user-last-name" type="text" name="user-last-name" value={this.state.last_name}/>
                                <button className="edit-last-name-btn" onClick={this.handleEditLastName}>Edit</button>
                            </div><br/>
                            <div className="user-profile-email" style={{display: "flex", justifyContent:"space-between", width:"30%"}}>
                                <label className="profile-email" id="profile-email">Email: </label>
                                <input className="user-email" type="text" name="user-email" value={this.state.email}/>
                                <button className="edit-email-btn" onClick={this.handleEditEmail}>Edit</button>
                            </div><br/>
                            <div className="user-profile-phone" style={{display: "flex", justifyContent:"space-between", width:"30%"}}>
                                <label className="profile-phone" id="profile-phone">Phone Number: </label>
                                <input className="user-phone" type="text" name="user-phone" value={this.state.phone_number}/>
                                <button className="edit-phone-btn" onClick={this.handleEditPhone}>Edit</button>
                            </div><br/>
                        </div>
                        {/* <form>
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
                            <button className="save-profile" id="save-profile" onClick={this.handleSaveProfile}>Save Profile</button>
                        </form> */}
                    </div>
                </div> 
                <br/>
                <div>
                    <UserResume />
                    <FavoritesBar />
                </div> 
            </div>
        )
    }
}


export default Profile