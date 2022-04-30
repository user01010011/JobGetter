import React from "react";
import UserSearch from './UserSearch'; 
import SearchBar from "../centerbar/SearchBar";
import SearchResults from "../search_result_display/SearchResults";
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