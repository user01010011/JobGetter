import React, { Component } from "react";
import FavoritesBar from '../centerbar/FavoritesBar';

class UserJobs extends Component {
    render() {
        return (
            <div className="userjobs">
                <div className="userjobs-applied"> 
                    <h4>Jobs Applied</h4>
                </div>
                <div className="userjobs-favorites"> 
                    <h4>Favorite Jobs</h4>
                    <FavoritesBar />
                </div>
            </div>
        )
    }
}

export default UserJobs