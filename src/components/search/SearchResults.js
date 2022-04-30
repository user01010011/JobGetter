import { connect } from "react-redux";
import SearchResultsCard from "./SearchResultsCard";
import { saveFavorites } from "../../redux/actions/Favorites";

import '../user/Search.css'; 


const SearchResults = (props) => {
    return (
        <div className="searchresults">
            <h3 className="search-header">Search Results </h3>
            <div className="searchresults-action-container">
                <div className="searchresults-action">
                    <label className="search-label" id="search-by-keyword">Search by 🔎 </label>
                    <input id="search-input" type="text" name="keyword" placeholder="Enter keyword..."/>
                </div>
                <div className="searchresults-action">
                    <label className="search-label" id="filter-by-category">Filter by 🗂 </label>
                    <select className="search-select" type="select" id="filter-title" name="filter-title">
                        <option value="All Levels">All Levels</option>
                        <option value="Junior">Junior</option>
                        <option value="Mid-Level">Mid-Level</option>
                        <option value="Senior">Senior</option>
                        <option value="Executive">Executive</option>
                    </select>
                </div>
                <div className="searchresults-action">
                    {/* <button className="search-button" type="submit" value="Sort by Date Posted">Sort by 🗓: </button> */}
                    <label className="search-label" id="filter-by-date">Filter by 🗓 </label>
                    <select className="search-select" type="select" id="filter-title" name="filter-date">
                        <option value="ALL Dates">ALL Dates</option>
                        <option value="Last 3 Days">Last 3 Days</option>
                        <option value="Last 7 Days">Last 7 Days</option>
                        <option value="Last 15 Days">Last 15 Days</option>
                        <option value="Last 30 Days">Last 30 Days</option>
                    </select>
                </div>
            </div>
            {(props.searchResults.length !== 0) ? (
                props.searchResults.map((job, i) => 
                    <SearchResultsCard 
                        job={job} 
                        key={i + 1} 
                        id={i + 1} 
                        currentUser={props.currentUser} 
                        save={() => (props.saveFavorites(job, props.currentUser))} 
                        // get={() => (props.getFavorites(job, props.currentUser))} 
                    />
                )
            ) 
                : 
                ""
            }
        </div>
    )
}

//             {(props.searchResults.length !== 0) ? (
//                 props.searchResults.map((job, i) => 
//                     <SearchResultsCard 
//                         job={job} 
//                         key={i + 1} 
//                         id={i + 1} 
//                         currentUser={props.currentUser} 
//                         save={() => (props.saveFavorites(job, props.currentUser))} 
//                     />
//                 )
//             ) 
//                 : 
//                 ""
//             }
//         </div>
//     )
// }

const mapStateToProps = state => {
    return ({
        searchResults: state.search.results,
        currentUser: state.auth.currentUser
    })
}

export default connect(mapStateToProps, { saveFavorites })(SearchResults);