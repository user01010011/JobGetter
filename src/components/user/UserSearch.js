import React from "react";
import SearchBar from '../centerbar/SearchBar';
import SearchResults from '../search_result_display/SearchResults';

const UserSearch = () => {

    return (
        <div className="usersearch">
            <div className="usersearch-searchbar"> 
                <SearchBar />
            </div>
            <div className="usersearch-searchresults"> 
                <h4>Favorite Jobs</h4>
                <SearchResults />
            </div>
        </div>
    )

}

export default UserSearch; 