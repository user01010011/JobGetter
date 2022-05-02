import React from "react";
import '../App.css';

const InvalidPath = () => {
    return (
        <div className="page-wrapper">
            <h2 className="header">Invalid Path!!</h2>
            <h4 className="tagline">Oops! It seems like we don't have that page.</h4><br/>
            <p>Try navigating using the buttons in the navigation bar or the links on the menu on the left of your home page.</p>
        </div>
    )
}

export default InvalidPath