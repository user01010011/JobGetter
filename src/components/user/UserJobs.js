import React, { Component } from "react";
import FavoritesBar from '../centerbar/FavoritesBar';

class UserJobs extends Component {
    render() {
        return (
            <div className="user-jobs" id="user-jobs">
                <div className="user-jobs-applied" id="user-jobs-applied"> 
                    <h4>Jobs Applied</h4>
                    // render/map all jobs applied by user, ordered by most recent first.
                </div>
                <div className="user-favorite-jobs" id="user-favorite-jobs"> 
                    <h4>Favorite Jobs</h4>
                    <FavoritesBar />
                </div>
            </div>
        )
    }
}

export default UserJobs