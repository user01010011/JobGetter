// import React, { useState } from "react";

const FavoritesCard = (props) => {
    // const [likes, setLikes] = useState(0) // [0, f(){}]
    return (
        <div className="favorites-card has-background-light" key={props.id} id={props.id} > 
        <ul>
            <br/>
            <strong>{props.job.job_title}</strong>, 
            <li>Compnay: <strong>{props.job.company}</strong>,</li>
            <li>Location: <strong>{props.job.job_location}</strong></li>
        </ul>
            <button className="delete-btn button is-small is-danger" onClick={props.delete}>X</button>
            {/* <button className="button is-small is-primary" onClick={() => setLikes(likes + 1)}>Like</button>
            {likes} */}
        </div>
    )
    // return (
    //     <div className="content c-card has-background-light">
    //         "Hello World"
    //     </div>
    // )
}

export default FavoritesCard;