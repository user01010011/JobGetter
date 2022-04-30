import React, { useState } from "react";

const SearchResultsCard = (props) => {
    const [likes, setLikes] = useState(0) // [0, f(){}]

    return (
        <div className="col content has-background-light" id="display-results-card" key={props.id} >
            <ul className="job-list" id="job-list">
                <br/>
                <h4>{props.job.job_title}</h4>
                <li><small>Job id: {props.id}</small></li>
                <li>Company: {props.job.job_company}</li>
                <li>Location: {props.job.job_location}</li>
                <li>Est. Salaray: {props.job.est_salary}</li>
                <li><a href={props.job.job_url} >APPLY</a></li>
                <li>Skill: {props.job.job_tech}</li>
                <li>Minimum Requirements: {props.job.min_reqs}</li>
                <li>Preferred Requirments: {props.job.preferred_reqs} </li>
                <li>Responsibilities: {props.job.responsibilities}</li>
                {/* <button className="view-btn button is-primary" onClick={props.show}>View</button> */}
                {/* <button className="favorite-btn button is-primary" onClick={props.save}>Favorite</button> */}
                <button className="favorite-btn button is-primary" onClick={props.save}>Favorite</button>
                <button className="button is-small is-primary" onClick={() => setLikes(likes + 1)}>❤️</button>
                {likes}
                <br/>
            </ul>
        </div>
    )
}

export default SearchResultsCard;

// class SearchResultsCard extends Component {

//     handleOnChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     };

//     handleOnClick = (event) => {
//         if (event.target.id === "view"){
//             <jobCard />
//         }
//         else if (event.target.id === "favorite"){
//             this.props.saveFavorites();
//         }
//     }

// render() {
//     return (
//         <div className="column content has-background-light" id="display-results-card" key={props.id} >
//             <ul>
//                 <br/>
//                 <h4>{props.job.job_title}</h4>
//                 <li>Company: {props.job.company}</li>
//                 <li>Location: {props.job.job_location}</li>
//                 <li>Estimated Salaray: {props.job.est_salary}</li>
//                 <li><a href={props.job.job_url}>Click Here to Apply</a></li>
//                 <button className="view-btn button is-primary" onClick={props.view}>View</button>
//                 <button className="favorite-btn button is-primary" id="favorite" onClick={props.saveFavorites}>Favorite</button>
//                 <br/>
//             </ul>
//         </div>
//     )
// }

// export default SearchResultsCard;

