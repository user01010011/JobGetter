import React, { Component } from "react";
import { connect } from "react-redux";
import FavoriteJobCard from "./FavoriteJobCard";
import { getFavorites, deleteFavorites } from "../../redux/actions/Favorites";
// import { showFavorites, clearFavorites } from "../../redux/actions/Favorites";
import { BiSortAlt2 } from "react-icons/bi";

import "./Favorite.css";

class FavoriteJobs extends Component {
  componentDidMount() {
    this.props.getFavorites(this.props.currentUser);
    // this.props.showFavorites(this.props.currentUser)
  }
  render() {
    return (
      <div className="favoritejobs">
        <div className="favorites-action-container">
          <div className="favorites-action">
            <label className="search-label" id="search-by-keyword">
              Search by 🔎{" "}
            </label>
            <input
              id="search-input"
              type="text"
              name="keyword"
              placeholder="Enter keyword..."
            />
          </div>
          <div className="favorites-action">
            <label className="search-label" id="filter-by-category">
              Filter by 🗂{" "}
            </label>
            <select
              className="search-select"
              type="select"
              id="filter-title"
              name="filter-title"
            >
              <option value="All Levels">All Levels</option>
              <option value="Junior">Junior</option>
              <option value="Mid-Level">Mid-Level</option>
              <option value="Senior">Senior</option>
              <option value="Executive">Executive</option>
            </select>
          </div>
          <div className="favorites-action">
            <label className="search-label" id="sort-by-date">
              Sort by 🗓{" "}
            </label>
            <span className="sort-icon-container">
            <BiSortAlt2 className="sort-icon" onClick={this.handleOnClick} />

            </span>
          </div>
        </div>

        <div className="favoritejobs-list-container">
          {this.props.favorites.map((favjob, i) => (
            <FavoriteJobCard
              favjob={favjob}
              key={i + 1}
              id={i + 1}
              currentUser={this.props.currentUser}
              delete={() =>
                this.props.deleteFavorites(favjob, this.props.currentUser)
              }
              // clear={() => (this.props.clearFavorites(job, this.props.currentUser))}
              show={() =>
                this.props.getFavorites(favjob, this.props.currentUser)
              }
              // show={() => (this.props.showFavorites(job, this.props.currentUser))}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites,
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps, { getFavorites, deleteFavorites })(
  FavoriteJobs
);
// export default connect(mapStateToProps, { showFavorites, clearFavorites })(FavoritesBar);
