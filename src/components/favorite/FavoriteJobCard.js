import React from "react";
// import React, { useState } from "react";

const FavoriteJobCard = (props) => {
    // const [likes, setLikes] = useState(0) // [0, f(){}]
    return (
        <div className="favorites-card has-background-light" key={props.id} id={props.id}> 
            <ul className="favorite-jobs-list" id="favorite-jobs-list">
                <br/>
                <h4>{props.favjob.job_title}</h4>
                <li>Compnay: {props.favjob.job_company}</li>
                <li>Location: {props.favjob.job_location}</li>
                <li>Est. Salary: {props.favjob.est_salary}</li>
                {/* <h4>{props.job.job_title}</h4>
                <li>Compnay: {props.job.job_company}</li>
                <li>Location: {props.job.job_location}</li>
                <li>Est. Salary: {props.job.est_salary}</li> */}
                <button className="delete-btn button is-small is-danger" onClick={props.delete}>X</button>
                {/* <button className="delete-btn button is-small is-danger" onClick={props.clear}>X</button> */}
                <li><a href={props.favjob.job_url} target="_blank" rel="noreferrer">Apply</a></li>
                {/* <button><a href={props.job.job_url} target="_blank" rel="noreferrer">Apply</a></button> */}
                {/* <button className="button is-small is-primary" onClick={() => setLikes(likes + 1)}>♥︎</button> */}
                {/* {likes} */}
            </ul>
        </div>
    )

}

export default FavoriteJobCard;