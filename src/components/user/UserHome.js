import React from "react";
import { Switch, Route } from "react-router-dom";
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
    </div>
  );
};

export default UserHome;
