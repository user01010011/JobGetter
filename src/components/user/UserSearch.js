import React from "react";
import SearchBar from "../search/SearchBar";
import SearchResults from "../search/SearchResults";
import "./Search.css";

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
  );
};

export default UserSearch;
