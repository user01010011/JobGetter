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
                <div class="user-profile">
                    <a href="/profile" role="button" id="profile-tab" className="profile-tab">
                        <div class="profile-logo">
                        </div>
                        <div>
                            <div class="menu-item">Profile</div>
                        </div>
                    </a>
                </div>
                <div class="user-dashboard">
                    <a href="/dashboard" role="button" id="dashboard-tab" className="dashboard-tab">
                        <div class="dashboard-logo">
                        </div>
                        <div>
                            <div class="menu-item">Dashboard</div>
                        </div>
                    </a>
                </div>
                <div class="user-jobs">
                    <a href="user-jobs" role="button" id="user-jobs-tab" className="user-jobs-tab">
                        <div class="user-jobs-logo">
                        </div>
                        <div>
                            <div class="menu-item">My Jobs Tracker</div>
                        </div>
                    </a>
                </div>
                <div class="user-companies">
                    <a href="user-companies" role="button" id="user-companies-tab" className="user-companies-tab">
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