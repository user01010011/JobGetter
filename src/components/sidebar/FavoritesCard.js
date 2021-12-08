import React, { useState } from "react";

const FavoritesCard = (props) => {
    const [likes, setLikes] = useState(0) // [0, f(){}]
    return (
        <div className="favorites-card has-background-light" key={props.id} id={props.id} > 
            <ul className="favorite-jobs-list" id="favorite-jobs-list">
                <br/>
                <strong>{props.job_title}</strong>
                <li>Compnay: <strong>{props.company}</strong></li>
                <li>Location: <strong>{props.job_location}</strong></li>
                <li><a href={props.job_url} target="_blank">Apply</a></li>
                {/* <button className="delete-btn button is-small is-danger" onClick={props.delete}>X</button> */}
                <button className="delete-btn button is-small is-danger" onClick={props.clear}>X</button>
                <button className="button is-small is-primary" onClick={() => setLikes(likes + 1)}>♥︎</button>
                {likes}
            </ul>
        </div>
    )

}

export default FavoritesCard;