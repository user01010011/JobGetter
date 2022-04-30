import React, { Component } from "react";
import { connect } from "react-redux";
import { searchQuery, clearSearch } from "../../redux/actions/Search";
// import { searchQuery, clearSearch, sortSearch } from "../../redux/actions/Search";
import { sortFavorites } from "../../redux/actions/Favorites";

import "../user/Search.css";

class SearchBar extends Component {
  state = {
    job_title: "",
    job_company: "",
    job_location: "",
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnClick = (event) => {
    if (event.target.id === "submit") {
      event.preventDefault();
      this.props.searchQuery(this.state);
    } else if (event.target.id === "reset") {
      this.setState({
        job_title: "",
        job_company: "",
        job_location: "",
      });
      this.props.clearSearch();
    } else if (event.target.id === "sort") {
      event.preventDefault();
      this.props.sortFavorites();
      // this.props.sortSearch();
    }
  };

  render() {
    return (
      <div className="searchbar">
        <h3 className="search-header">Search for Top Tech Jobs </h3>
        <form className="search-form">
          <div className="search-form-item">
            <label className="form-label">Job Title Search:</label>
            <input
              className="form-input"
              type="text"
              name="job_title"
              placeholder="Enter Job Title"
              value={this.state.job_title}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="search-form-item">
            <label className="form-label">Company Search:</label>
            <input
              className="form-input"
              type="text"
              name="company"
              placeholder="Enter Company Name"
              value={this.state.job_company}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="search-form-item">
            <label className="form-label">Location Search:</label>
            <select
              className="form-select"
              type="select"
              value={this.state.job_location}
              onChange={this.handleOnChange}
            >
              <option value="all">ALL</option>
              <option value="r">Remote</option>
              <option value="ny">New York, NY</option>
              <option value="sf">San Francisco, CA</option>
              <option value="mv">Mountain View, CA</option>
              <option value="pa">Palo Alto, CA</option>
              <option value="cu">Cupertino, CA</option>
              <option value="la">Los Angelos, CA</option>
              <option value="se">Seattle, WA</option>
              <option value="ch">Chicago, IL</option>
              <option value="bo">Boston, MA</option>
              <option value="au">Austin, TX</option>
            </select>
          </div>
          <div className="search-actions">
            <button
              className="search-button"
              id="submit"
              onClick={this.handleOnClick}
            >
              Submit
            </button>
            <button
              className="search-button"
              id="reset"
              onClick={this.handleOnClick}
            >
              Reset
            </button>
            {/* <button className="search-button" id="sort-search" onClick={this.handleOnClick}>Sort Searches</button> */}
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { searchQuery, clearSearch, sortFavorites })(
  SearchBar
);
// export default connect(null, { searchQuery, clearSearch, sortSearch })(SearchBar);
