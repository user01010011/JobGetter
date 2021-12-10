import React, { Component } from "react";
import { connect } from "react-redux";

import { searchQuery, clearSearch } from "../../redux/actions/Search";
// import { searchQuery, clearSearch, sortSearch } from "../../redux/actions/Search";
import { sortFavorites } from "../../redux/actions/Favorites";

class SearchBar extends Component {
    state = {
        job_title: "",
        company: "",
        job_location: ""
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleOnClick = (event) => {
        if (event.target.id === "submit"){
            event.preventDefault();
            this.props.searchQuery(this.state);
        }
        else if (event.target.id === "reset"){
            this.setState({
                job_title: "",
                company: "",
                job_location: ""
                }
            )   
            this.props.clearSearch();
        }
        else if (event.target.id === "sort"){
            event.preventDefault();
            this.props.sortFavorites();
            // this.props.sortSearch();
        }

    }

    render() {
        return (
            <div className="search-bar has-text-white">
                <form className="search-form">
                    <label className="label"><h3>Search for Top Tech Jobs: </h3></label>
                    <br/>
                    <label className="label"><h4>Job Title Search: </h4></label>
                    <div className="control">
                        <input className="input" type="text" name="job_title" placeholder="Enter Job Title" value={this.state.job_title} onChange={this.handleOnChange} />
                    </div>
                    <br/>
                    <label className="label"><h4>Company Search: </h4></label>
                    <div className="control">
                        <input className="input" type="text" name="company" placeholder="Enter Company Name" value={this.state.company} onChange={this.handleOnChange} />
                    </div>
                    <br/>
                    <label className="label"><h4>Location Search: </h4></label>
                    <div className="control">
                        <select name="location" value={this.state.job_location} onChange={this.handleOnChange}>
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
                    <br/>
                    <div className="buttons">
                        <button className="button is-primary" id="submit" onClick={this.handleOnClick}>Submit</button>
                        <button className="button is-danger" type="reset" id="reset" onClick={this.handleOnClick}>Reset</button>
                        <button className="button is-warning" id="sort-search" onClick={this.handleOnClick}>Sort Searches</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { searchQuery, clearSearch, sortFavorites })(SearchBar);
// export default connect(null, { searchQuery, clearSearch, sortSearch })(SearchBar);