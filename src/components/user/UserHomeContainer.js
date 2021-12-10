import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SideBarContainer from "../centerbar/SideBarContainer";
import SearchBar from "../centerbar/SearchBar";
import SearchResults from "../search_result_display/SearchResults";
// import UserProfile from "./UserProfile";
import UserMenu from "../sidebar/UserMenu";

const UserHomeContainer = () => {
    return (
        <div className="column-home-container" id="user-home">
            <UserMenu />
            <SideBarContainer />
            <SearchBar />
            <SearchResults />
        </div>
    )
}

export default UserHomeContainer;