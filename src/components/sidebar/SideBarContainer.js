import React from "react";

import SearchBar from "./SearchBar";
import FavoritesBar from "./FavoritesBar";
import "./SideBarContainer.css";

const SideBarContainer = () => {
    return (
        <div className="column side-bar has-background-light is-one-quarter" style={{position: "fixed", top: "500px"}}>
            <SearchBar />          
            <label className="label"><h2>Favorites:</h2></label>
            <FavoritesBar />
        </div>
    )
}

export default SideBarContainer;