import React, { Component } from "react";
import { connect } from "react-redux";

import { searchQuery, clearSearch } from "../../redux/actions/Search";
import { sortFavorites } from "../../redux/actions/Favorites";

class SearchBar extends Component {
    state = {
        job_title: "",
        company: "",
        job_location: ""
    }

    handleOnChange = (event) =>{
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
        }
    }

    render() {
        return (
            <div className="search-bar has-text-white" style={{position: "fixed", top: "180px"}}>
                <form className="search-form">
                    <label className="label"><h2>Search for Top Tech Jobs:</h2></label>
                    <label className="label"><h4>Job Title Search:</h4></label>
                    <div className="control">
                        <input className="input" type="text" name="job_title" placeholder="Input Job Title" value={this.state.job_title} onChange={this.handleOnChange} />
                    </div>
                    <label className="label"><h4>Company Search:</h4></label>
                    <div className="control">
                        <input className="input" type="text" name="company" placeholder="Input Company" value={this.state.company} onChange={this.handleOnChange} />
                    </div>
                    <label className="label"><h4>Location Search:</h4></label>
                    <div className="control">
                        <select name="location" onChange={this.handleOnChange}>
                            <option value="">None</option> 
                            <option value="ny">New York</option>
                            <option value="sf">San Francisco</option>
                            <option value="mv">Mountain View</option>
                            <option value="pa">Palo Alto</option>
                        </select>
                    </div>
                    <div className="buttons">
                        <button className="button is-primary" id="submit" onClick={this.handleOnClick}>Submit</button>
                        <button className="button is-danger" type="reset" id="reset" onClick={this.handleOnClick}>Reset</button>
                        <button className="button is-warning" id="sort" onClick={this.handleOnClick}>Sort Favorites</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { searchQuery, clearSearch, sortFavorites })(SearchBar);