const initialState = {
    favorites: [],
    message: ""
}

export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_FAVORITE":
            return ({
                favorites: [...state.favorites, action.payload.favorite],
                message: ""
            });

        case "DO_NOT_SAVE_FAVORITE":
            return ({
                favorites: [...state.favorites],
                message: action.payload.message
            })
        
        case "GET_FAVORITES":
            return ({
                favorites: [...action.payload],
                message: ""
            });

        case "SORT_FAVORITES":
            const sortedFavorites = state.favorites.sort((a, b) => {
                if (a.job_title < b.job_title) {
                    return -1;
                }
                else if (a.job_title > b.job_title){
                    return 1;
                }
                return 0;
            });

            return ({
                favorites: [...sortedFavorites],
                message: ""
            });

        case "CLEAR_FAVORITES":
            return ({
                favorites: [],
                message: ""
            })

        case "DELETE_FAVORITE": 
            const newFavoritesArray = state.favorites.filter(job => job.id !== action.payload.id)
            return ({
                favorites: [...newFavoritesArray],
                message: ""
            });
        
        default:
            return state;
    }
}