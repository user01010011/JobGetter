import React from "react";

import SearchBar from "./SearchBar";
import FavoritesBar from "./FavoritesBar";

const SideBarContainer = () => {
    return (
        <div className="column-side-bar has-background-light" >
            <SearchBar />
            <br/>
            <br/>
            <label className="label-favorites">
                <h3>Favorites:</h3>
            </label>
            <br/>
            <FavoritesBar />
        </div>
    )
}

export default SideBarContainer;