import React from "react";
import SearchBar from '../centerbar/SearchBar';
import SearchResults from '../search_result_display/SearchResults';
import './Search.css';

const UserSearch = () => {

    return (
        <div className="usersearch">
            <div className="usersearch-searchbar"> 
                <SearchBar />
            </div>
            <div className="usersearch-searchresults"> 
                <SearchResults />
            </div>
        </div>
    )

}

export default UserSearch; 