import React, { useState } from "react";

const FavoritesCard = (props) => {
    const [likes, setLikes] = useState(0) // [0, f(){}]
    return (
        <div className="favorites-card has-background-light" key={props.id} id={props.id} > 
        <ul>
            <br/>
            <strong>{props.job_title}</strong>
            <li>Compnay: <strong>{props.company}</strong></li>
            <li>Location: <strong>{props.job_location}</strong></li>
        </ul>
            <button className="delete-btn button is-small is-danger" onClick={props.delete}>X</button>
            {/* <button className="delete-btn button is-small is-danger" onClick={props.clear}>X</button> */}
            <button className="button is-small is-primary" onClick={() => setLikes(likes + 1)}>♥︎</button>
            {likes}
        </div>
    )

}

export default FavoritesCard;