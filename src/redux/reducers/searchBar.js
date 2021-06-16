const initialState = {
    searchBarIsActivated: false,
    theSearchedTerm: ""
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
        case 'SET_THE_SEARCHED_TERM_FROM_SEARCH_BAR':
            return {
                ...state,
                theSearchedTerm: action.payload.searchedTerm
            }
        default:
            return state;
    }
};

export default searchBarReducer;