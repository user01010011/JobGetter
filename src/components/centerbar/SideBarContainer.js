import React from "react";

import UserProfile from "../user/UserProfile";
// import SearchBar from "./SearchBar";
// import FavoritesBar from "./FavoritesBar";
// import SearchResults from "../search_result_display/SearchResults";

const SideBarContainer = () => {
    return (
        <div className="column-side-bar has-background-light" >
            <UserProfile />
            {/* <SearchBar /> */}
            {/* <FavoritesBar /> */}
            {/* <SearchResults /> */}
        </div>
    )
}

export default SideBarContainer;