// const BASE_URL = "http://localhost:3000/users"


// export const searchQuery = (currentUser) => {
export const searchQuery = (queries) => {
    const url = new URL("http://localhost:3000/search");
    url.search = new URLSearchParams(queries);
    // const url = new URL("http://localhost:3000/jobs#search");
    // URL.search = new URLSearchParams(queries);
    // const URL = BASE_URL + `/${currentUser.id}/jobs`;
    return (
        dispatch => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    dispatch({
                        type: "SEARCH_SUCCESS",
                        payload: {
                            results: data.JOBDATA
                        }
                    })
                });
        }
    );
}

export const clearSearch = () => {
    return (
        dispatch => {
            dispatch({
                type: "CLEAR_SEARCH"
            }
        )
        }
    );
}

// export const sortSearch = () => {
//     return (
//         dispatch => {
//             dispatch({
//                 type: "SORT_SEARCH"
//             })
//         }
//     );
// }