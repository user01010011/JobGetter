import React, { Component } from "react";
import { userLogIn } from "../../redux/actions/UserAuthentication";
import './Dashboard.css';

class UserDashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <h3 className="dashboard-header">Welcome, Shasha! :)</h3> 
                <h4>Did you applied to your favorite jobs today?</h4>
                <div className="dashboard-top">
                    <span>Weekly Job Report</span>
                    <div className="job-blocks">
                        <div className="job-block">
                            <span>#</span>
                            <span className="block-text">Applied</span>
                        </div>
                        <div className="job-block">
                            <span>#</span>
                            <span className="block-text">Favorited</span>
                        </div>
                    </div>
  
                </div>
                <div className="dashboard-middle">
                    <div className="activity-chart-container">
                        Activity Chart
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDashboard