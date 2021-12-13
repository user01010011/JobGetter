import React, { Component } from "react"; 

class UserMenu extends Component {

    render() {
        return (
            <div className="col sidebar-user-menu">
                <div className="company-sidebar-display">
                <a href="/home" role="button" id="home-tab" className="home-tab">
                        <div class="home-logo">
                        </div>
                        <div>
                            <div class="menu-item">Job Getter</div>
                        </div>
                    </a>
                </div>
                <br/>
                <div class="user-avatar">
                    <a href="/profile" role="button" id="profile-tab" className="profile-tab">
                        <div class="profile-photo-username" id="profile-photo-username">
                            <img style={{width: "50px", height:"50px", borderRadius:"50px"}} alt=""
                            src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
                            />
                            <h5>Username</h5>
                        </div>
                    </a>
                </div><br/>
                <div class="user-profile">
                    <a href="/profile" role="button" id="profile-tab" className="profile-tab" onClick={this.handleGoToProfile}>
                        <div class="profile-logo">
                        </div>
                        <div>
                            <div class="menu-item">Profile</div>
                        </div>
                    </a>
                </div><br/>
                <div class="user-resume">
                    <a href="/resume" role="button" id="resume-tab" className="resume-tab" onClick={this.handleGoToResume}>
                        <div class="resume-logo">
                        </div>
                        <div>
                            <div class="menu-item">Resume</div>
                        </div>
                    </a>
                </div><br/>
                <div className="user-dashboard">
                    <a href="/dashboard" role="button" id="dashboard-tab" className="dashboard-tab" onClick={this.handleGoToDashboard}>
                        <div class="dashboard-logo">
                        </div>
                        <div>
                            <div class="menu-item">Dashboard</div>
                        </div>
                    </a>
                </div><br/>
                <div className="user-applied-jobs">
                    <a href="user-applied-jobs" role="button" id="user-applied-jobs-tab" className="user-applied-jobs-tab" onClick={this.handleGoToUserAppliedJobs}>
                        <div class="user-applied-jobs-logo">
                        </div>
                        <div>
                            <div class="menu-item">Job Application Tracker</div>
                        </div>
                    </a>
                </div><br/>
                <div className="user-favorite-jobs">
                    <a href="user-favorite-jobs" role="button" id="user-favorite-jobs-tab" className="user-favorite-jobs-tab" onClick={this.handleGoToUserFavoriteJobs}>
                        <div class="user-favorite-jobs-logo">
                        </div>
                        <div>
                            <div class="menu-item">My Favorite Jobs</div>
                        </div>
                    </a>
                </div><br/>
                <div className="user-companies">
                    <a href="user-companies" role="button" id="user-companies-tab" className="user-companies-tab" onClick={this.handleGoToUserCompanies}>
                        <div class="user-companies-logo">
                        </div>
                        <div>
                            <div class="menu-item">My Companies</div>
                        </div>
                    </a>
                </div>
                {/* <div class="user-forum">
                    <a href="user-forum" role="button" id="user-forum-tab" className="user-forum-tab">
                        <div class="user-forum-logo">
                        </div>
                        <div>
                            <div class="menu-item">Forum</div>
                        </div>
                    </a>
                </div> */}
            </div>
        )
    }
}

export default UserMenu