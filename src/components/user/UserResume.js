import React, { Component } from "react";

class Resume extends Component {
    state = {
        resume: "",
        linkedin: "",
        github: "",
        twitter: "",
        website: "",
    }
    
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleUploadResume = (event) => {
        console.log("you clicked upload resume!")
    };

    handleChangeLinkedin = (event) => {
        console.log("you changed Linkedin!")
    };

    handleChangeGithub = (event) => {
        console.log("you changed Github!")
    };

    handleChangeTwitter = (event) => {
        console.log("you changed Twitter!")
    };

    handleChangeWebsite = (event) => {
        console.log("you changed Website!")
    };

    render() {
        return (
            <div className="resume-container" id="resume-container">
                <h3>My Resume</h3>
                <div className="resume-upload" id="resume-upload">
                    <button className="resume-upload" id="resume-upload" onClick={this.handleUploadResume}>Choose File</button> 
                </div>
                <div>
                    <a href="/resume" target="_blank">Current Resume</a>
                </div>
                <br/><br/>
                <div className="profesional-links-container" id="professional-links-container">
                    <h4>My professional links</h4><br/>
                    <div className="user-linkedin" id="user-linkedin">
                        <label class="linkedin-label">Linkedin: </label>
                        <input class="linkedin-input" name="linkedin" placeholder="URL or Username" onChange={this.handleChangeLinkedin}></input>
                    </div><br/>
                    <div className="user-github" id="user-github">
                        <label class="github-label">Github: </label>
                        <input class="github-input" name="github" placeholder="URL or Username" onChange={this.handleChangeGithub}></input>
                    </div><br/>
                    <div className="user-twitter" id="user-twitter">
                        <label class="twitter-label">Twitter: </label>
                        <input class="twitter-input" name="twitter" placeholder="URL or Username" onChange={this.handleChangeTwitter}></input>
                    </div><br/>
                    <div className="user-website" id="user-website">
                        <label class="website-label">Website: </label>
                        <input class="website-input" name="website" placeholder="URL or Username" onChange={this.handleChangeWebsite}></input>
                    </div><br/>
                </div>
            </div>

        )
    }
}

export default Resume