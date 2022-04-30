const BASE_URL = "http://localhost:3000/users"

export const saveFavorites = (favjobData, currentUser) => {
    // const URL = BASE_URL + `/${currentUser.id}/jobs/${jobData.id}`;
    const URL = BASE_URL + `/${currentUser.id}/favjobs`;
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
                    favjob: {
                        job_title: favjobData.job_title,
                        id: favjobData.id,
                        job_company: favjobData.job_company,
                        job_location: favjobData.job_location,
                        est_salary: favjobData.est_salary,
                        job_url: favjobData.job_url,
                        min_reqs: favjobData.min_reqs,
                        preferred_reqs: favjobData.preferred_reqs,
                        responsibilities: favjobData.responsibilities,
                        user_id:currentUser.id 
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
                    console.log("you got this far!")   
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
    const URL = BASE_URL + `/${currentUser.id}/favjobs`

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

// export const clearFavorites = () => {
//     console.log("you clicked X!")
//     return(
//         dispatch => 
//         dispatch({
//             type: "CLEAR_FAVORITES"
//         })
//     );
// }

export const viewFavorites = () => {
    return(
        dispatch => 
        dispatch({
            type: "VIEW_FAVORITES"
        })
    );
}

export const deleteFavorites = (favjobData, currentUser) => {
    const URL = BASE_URL + `/${currentUser.id}/favjobs/${favjobData.id}`

    return (
        dispatch => {
            fetch(URL, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    dispatch({
                        type: "DELETE_FAVORITE",
                        payload: favjobData
                    })
                })
                .catch(err => console.log(err.message))
        }
    )
}

// export const deleteFavorites = () => {
//     return(
//         dispatch => 
//         dispatch({
//             type: "DELETE_FAVORITES"
//         })
//     );
// }