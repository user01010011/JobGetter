import React from "react";

import UserProfile from "../user/UserProfile";
import SearchBar from "./SearchBar";
// import FavoritesBar from "./FavoritesBar";

const SideBarContainer = () => {
    return (
        <div className="column-side-bar has-background-light" >
            <UserProfile />
            <SearchBar />
            {/* <FavoritesBar /> */}
        </div>
    )
}

export default SideBarContainer;