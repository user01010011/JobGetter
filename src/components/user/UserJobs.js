import React, { Component } from "react";
import FavoriteJobs from "../favorite/FavoriteJobs";

import "./Job.css";

class UserJobs extends Component {
  render() {
    return (
      <div className="userjobs">
        <div className="userjobs-main">
          <div className="userjobs-container">
          <h3 className="job-header">Your Favorite Jobs ❤️ </h3>
            <FavoriteJobs />
          </div>
          <div className="userjobs-container">
            <h3 className="job-header">Applied Jobs 💼</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default UserJobs;
