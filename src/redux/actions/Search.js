// const BASE_URL = "http://localhost:3000/users"
const URL = "http://localhost:3000/search"

// export const searchQuery = (currentUser) => {
export const searchQuery = () => {
    // const url = new URL("http://localhost:3000/jobs#search");
    // URL.search = new URLSearchParams(queries);
    // const URL = BASE_URL + `/${currentUser.id}/jobs`;
    return (
        dispatch => {
            fetch(URL)
                .then(res => res.json())
                .then(data => {
                    dispatch({
                        type: "SEARCH_SUCCESS",
                        payload: {
                            results: data
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