import React from "react";

const SearchResultsCard = (props) => {
    return (
        <div className="column content has-background-light" id="display-results-card" key={props.id} >
            <ul>
                <br/>
                <h4>{props.job.job_title}</h4>
                <li>Company: {props.job.company}</li>
                <li>Location: {props.job.job_location}</li>
                <li>Estimated Salaray: {props.job.est_salary}</li>
                <li>Url: {props.job.job_url}</li>
                <button className="view-btn button is-primary" onClick={props.show}>View</button>
                <button className="favorite-btn button is-primary" onClick={props.save}>❤️Favorite</button>
                <br/>
            </ul>
        </div>
    )
}

export default SearchResultsCard;