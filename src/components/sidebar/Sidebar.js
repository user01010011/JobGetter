import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdSearch,
  MdOutlineCases,
  MdBusiness,
  MdSentimentVerySatisfied,
} from "react-icons/md";
import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      username: ""
    }; 
  }
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar-menu">
          <div className="sidebar-top">
            {/* <Link to="/" className="sidebar-item-link">
              <span>Job Getter Logo</span>
            </Link> */}
            <Link to="/profile">
              <div className="userprofile-container">
                <img
                  className="userprofile-avatar"
                  alt=""
                  src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                />
                  <h5 className="userprofile-username">{this.state.username}</h5>
              </div>
            </Link>
          </div>
          <ul className="sidebar-items">
            <li className="sidebar-item">
              <Link to="/search" className="sidebar-item-link">
                <MdSearch className="sidebar-item-icon" />
                <span className="sidebar-item-text">Search Jobs</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/dashboard" className="sidebar-item-link">
                <MdOutlineDashboard className="sidebar-item-icon" />
                <span className="sidebar-item-text">Dashboard</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/userjobs" className="sidebar-item-link">
                <MdOutlineCases className="sidebar-item-icon" />
                <span className="sidebar-item-text">My Jobs</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/usercompanies" className="sidebar-item-link">
                <MdBusiness className="sidebar-item-icon" />
                <span className="sidebar-item-text">My Companies</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/profile" className="sidebar-item-link">
                <MdSentimentVerySatisfied className="sidebar-item-icon" />
                <span className="sidebar-item-text">My Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
