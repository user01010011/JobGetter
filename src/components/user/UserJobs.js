import React, { Component } from "react";
import FavoriteJobs from "../favorite/FavoriteJobs";

import "./Job.css";

class UserJobs extends Component {
  render() {
    return (
      <div className="userjobs">
        <div className="userjobs-container">
          <div className="userjobs-block">
            <FavoriteJobs />
          </div>
          <div className="userjobs-block">
            <h4>Applied Jobs</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default UserJobs;
