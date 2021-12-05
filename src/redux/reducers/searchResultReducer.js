const initialState = {
    results: []
};

export const searchResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_SUCCESS": {
            return {
                ...state,
                results: action.payload.results
            };
        }

        // case "SEARCH_SUCCESS": {
        //     const searchedResults = state.results.filter((data) => {
        //         if (this.state.job_title === "" && this.state.company === "" && this.state.job_location === "") return data; 
        //         else if (
        //             data.job_title.toLowerCase().includes(this.state.job_title.toLowerCase()) ||
        //             data.company.toLowerCase().includes(this.state.company.toLowerCase()) ||
        //             data.job_location.toLowerCase().includes(this.state.search.toLowerCase())
        //             ){
        //                 return data;
        //             }
        //     })
            
            // return ({
            //     ...state,
            //     results: [searchedResults],
            // });
        // }


        case "CLEAR_SEARCH": {
            return {
                ...state,
                results: []
            };
        }

        // case "SORT_SEARCH":
        //     const sortedSearch = state.results.sort((a, b) => {
        //         if (a.job_title < b.job_title) {
        //             return -1;
        //         }
        //         else if (a.job_title > b.job_title){
        //             return 1;
        //         }
        //         return 0;
        //     });

        //     return ({
        //         favorites: [...sortedSearch],
        //         message: ""
        //     });
        default:{
            return state;
        }
    };
};