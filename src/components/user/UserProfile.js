import React, { Component } from 'react'; 
import { userLogIn } from '../../redux/actions/UserAuthentication'; 

class Profile extends Component {
    state = {
        username: "", 
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
                <div>
                    <img style={{width: "160px", height:"160px", borderRadius:"80px"}}
                    src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
                    /><br/>
                    <button className="edit-photo" id="edit-photo" onClick={this.handleChangePhoto}>Change Photo</button>
                </div>
                <div>
                    <h4>Welcome, Shasha!</h4>
                    <div style={{display: "flex", justifyContent:"space-between", width:"108%"}}>
                        <h6>Favorites </h6><br/><br/>
                        <h6>Applied </h6>
                    </div>
                    <button className="edit-profile" id="edit-profile" onClick={this.handleEditProfile}>Edit Profile</button>
                    <h4>What jobs have you applied to today?</h4>
                </div>  
            </div>
        )
    }
}


export default Profile