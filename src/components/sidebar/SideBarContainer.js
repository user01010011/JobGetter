import React from "react";

import SearchBar from "./SearchBar";
import FavoritesBar from "./FavoritesBar";

const SideBarContainer = () => {
    return (
        <div className="column-side-bar has-background-light" >
            <SearchBar />
            <FavoritesBar />
        </div>
    )
}

export default SideBarContainer;