import React from "react";
import UserSearch from './UserSearch'; 
import SearchBar from "../search/SearchBar";
import SearchResults from "../search/SearchResults";
// import UserProfile from "./UserProfile";
import Sidebar from "../sidebar/Sidebar";

const UserHome = () => {
    return (
        <div className="userhome" id="user-home">
            <Sidebar />
        </div>
    )
}

export default UserHome;