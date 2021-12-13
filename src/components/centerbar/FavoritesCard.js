import React from "react";
// import React, { useState } from "react";

const FavoritesCard = (props) => {
    // const [likes, setLikes] = useState(0) // [0, f(){}]
    return (
        <div className="favorites-card has-background-light" key={props.id} id={props.id}> 
            <ul className="favorite-jobs-list" id="favorite-jobs-list">
                <br/>
                <h4>{props.job.job_title}</h4>
                <li>Compnay: {props.job.company}</li>
                <li>Location: {props.job.job_location}</li>
                <li><a href={props.job.job_url} target="_blank" rel="noreferrer">Apply</a></li>
                {/* <button className="delete-btn button is-small is-danger" onClick={props.delete}>X</button> */}
                <button className="delete-btn button is-small is-danger" onClick={props.clear}>X</button>
                {/* <button className="button is-small is-primary" onClick={() => setLikes(likes + 1)}>♥︎</button> */}
                {/* {likes} */}
            </ul>
        </div>
    )

}

export default FavoritesCard;