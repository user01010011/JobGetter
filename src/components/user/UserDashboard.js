import React, { Component } from "react";

class UserDashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <h4>Welcome, Shasha! :)</h4> 
                <h4>Did you applied to your favorite jobs today?</h4>
                <div>
                    add # of jobs favorated, # of jobs applied this week, this month, this year
                    add analytics like bar/line graph to show 
                    add overall #s & compare with other job seekers 
                    add to do list
                    add notifications from companies
                    congratulation message if the user had received a job offer
                </div>
            </div>
        )
    }
}

export default UserDashboard