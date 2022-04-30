import React, { Component } from "react";
import FavoriteJobs from '../favorite/FavoriteJobs';

import './Job.css';

class UserJobs extends Component {
    render() {
        return (
            <div className="userjobs">
                <div className="userjobs-applied"> 
                    <h4>Jobs Applied</h4>
                </div>
                <div className="userjobs-favorites"> 
                    <h4>Favorite Jobs</h4>
                    <FavoriteJobs />
                </div>
            </div>
        )
    }
}

export default UserJobs