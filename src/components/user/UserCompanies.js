import React, { Component } from "react";

class UserCompanies extends Component {
    render() {
        return (
            <div className="user-companies-container">
                <div className="user-companies">
                    <h3>My Companies</h3>
                </div>
                <div className="user-favorite-companies">
                    <h3>My Favorite Companies</h3>
                </div>
            </div>
        )
    }
}

export default UserCompanies