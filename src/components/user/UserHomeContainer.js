import React from "react";

import SideBarContainer from "../sidebar/SideBarContainer";
import SearchResults from "../search_result_display/SearchResults";

const UserHomeContainer = () => {
    return (
        <div className="column-home-container" id="user-home">
            <SideBarContainer />
            <SearchResults />
        </div>
    )
}

export default UserHomeContainer;