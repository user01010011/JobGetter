import { connect } from "react-redux";

import SearchResultsCard from "./SearchResultsCard";
import { saveFavorites } from "../../redux/actions/Favorites";

const SearchResults = (props) => {
    return (
        <div className="col search-results" id="display-results-container">
            <h3>Search Results: </h3>
            <div className="sort-filter-search" style={{display:"flex", justifyContent:"space-between"}}>
                <button id='sort-results' className="btn btn-block" type="submit" name="sort-results" value="Sort by Date Posted">Sort by Date Posted </button>
                <label id="filter-by-category">Filter by 🗂: </label>
                <select type="select" id="filter-title" name="filterTitle">
                    <option value="All Levels">All Levels</option>
                    <option value="Junior">Junior</option>
                    <option value="Mid-Level">Mid-Level</option>
                    <option value="Senior">Senior</option>
                    <option value="Executive">Executive</option>
                </select>
                <label id="search-by-keyword">Search by 🔎: </label>
                <input id="search-input" type="text" name="keyword" placeholder="Enter keyword..."/>
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