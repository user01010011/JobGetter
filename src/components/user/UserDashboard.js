import React, { Component } from "react";
import { connect } from 'react-redux'; 
import { userLogIn } from "../../redux/actions/UserAuthentication";
import "./Dashboard.css";

class UserDashboard extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      first_name: "", 
      applied_jobs: "", 
      favorite_jobs: "", 
    }
  }
  render() {
    return (
      <div className="dashboard">
        <h3 className="dashboard-header">Welcome, {this.props.user.first_name} :)</h3>
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
          <div className="activity-chart-container">Activity Chart</div>
        </div>
      </div>
    );
  }
}

// export default UserDashboard;

const mapStateToProps = state => {
  return ({
    user: state.auth.currentUser
  })
}

export default connect(mapStateToProps)(UserDashboard); 