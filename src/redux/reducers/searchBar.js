const initialState = {
    resultsAfterSearch: [],
    searchBarIsActivated: false
};

function searchBarReducer(state = initialState, action) {
    
    switch(action.type) {
        case 'TOGGLE_SEARCH_BAR':
            if(action.payload.searchBarInstructions === "close shearch bar") {
                return {
                    ...state,
                    searchBarIsActivated: false
                }
            }else {
                return {
                    ...state,
                    searchBarIsActivated: !state.searchBarIsActivated
                }
            }
            
        default:
            return state;
    }
};

export default searchBarReducer;