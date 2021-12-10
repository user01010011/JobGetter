import React, { Component } from "react";

class Resume extends Component {
    render() {
        return (
            <div className="resume-container" id="resume-container">
                <h3>My Resume</h3>
                <div className="resume-upload" id="resume-upload">
                    <button className="resume-upload" id="resume-upload" onClick={this.handleUploadResume}>Choose File</button> 
                </div>
                <div>
                    <a href="" target="_blank">Current Resume</a>
                </div>
            </div>

        )
    }
}

export default Resume