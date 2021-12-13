const BASE_URL = "http://localhost:3000/users"

export const saveFavorites = (jobData, currentUser) => {
    // const URL = BASE_URL + `/${currentUser.id}/jobs/${jobData.id}`;
    const URL = BASE_URL + `/${currentUser.id}/jobs`;
    console.log("You just clicked Favorite button!")
        // return (
        //     dispatch =>
        //     fetch(URL)
        //         .then(res => res.json())
        //         .then(data => {
        //             dispatch({
        //                 type: "SAVE_FAVORITES",
        //                 payload: data
        //             })
        //         })
        // );

    return (
        dispatch => {
            fetch(URL, {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ 
                    job: {
                        job_title: jobData.JobTitle,
                        company: jobData.Company,
                        job_location: jobData.JobLocation,
                        est_salary: jobData.EstSalary,
                        job_url: jobData.JobUrl,
                        min_reqs: jobData.MinReqs,
                        preferred_reqs: jobData.PreferredReqs,
                        responsibilities: jobData.Responsibilities
                    }   
                })
            })
            .then(res => res.json())
            .then(data => {
                if (data.status >= 400){
                    dispatch({
                        type: "DO_NOT_SAVE_FAVORITE",
                        payload: data
                    })
                }
                else {    
                    dispatch({
                        type: "SAVE_FAVORITE",
                        payload: {
                            favorite: data
                        }
                    })
                }
            })
        }
    );
 }


export const showFavorites = () => {
    return(
        dispatch => 
        dispatch({
            type: "SHOW_FAVORITES"
        })
    );
}

export const getFavorites = currentUser => {
    const URL = BASE_URL + `/${currentUser.id}/jobs`

    return (
        dispatch =>
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: "GET_FAVORITES",
                    payload: data
                })
            })
    );
}

export const sortFavorites = () => {
    return(
        dispatch => 
        dispatch({
            type: "SORT_FAVORITES"
        })
    );
}

export const clearFavorites = () => {
    console.log("you clicked X!")
    return(
        dispatch => 
        dispatch({
            type: "CLEAR_FAVORITES"
        })
    );
}

export const viewFavorites = () => {
    return(
        dispatch => 
        dispatch({
            type: "VIEW_FAVORITES"
        })
    );
}

// export const deleteFavorites = (jobData, currentUser) => {
//     const URL = BASE_URL + `/${currentUser.id}/jobs/${jobData.id}`

//     return (
//         dispatch => {
//             fetch(URL, {
//                 method: "DELETE",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json"
//                 }
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     dispatch({
//                         type: "DELETE_FAVORITE",
//                         payload: jobData
//                     })
//                 })
//                 .catch(err => console.log(err.message))
//         }
//     )
// }

export const deleteFavorites = () => {
    return(
        dispatch => 
        dispatch({
            type: "DELETE_FAVORITES"
        })
    );
}