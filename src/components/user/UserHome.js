import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import UserSearch from "./UserSearch";
import UserJobs from "./UserJobs";
import UserProfile from "./UserProfile";
import UserCompanies from "./UserCompanies";

import Sidebar from "../sidebar/Sidebar";
import "../Home.css";

const UserHome = () => {
  return (
    <div className="userhome">
      <Sidebar />
      <Switch>
        {/* <Route exact path="/">
          <Redirect to="/search" />
        </Route> */}
        <Route path="/search" component={UserSearch} />
        <Route path="/dashboard" component={UserDashboard} />
        <Route path="/userjobs" component={UserJobs} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/usercompanies" component={UserCompanies} />
      </Switch>
    </div>
  );
};

export default UserHome;
