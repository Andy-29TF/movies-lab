const initialState = {
    listOfAllSavedMovies: []
};

function saveListReducer(state = initialState, action) {
    
    switch(action.type) {
        case 'ADD_TO_MY_LIST':
            return {
                listOfAllSavedMovies: [
                    ...state.listOfAllSavedMovies,
                    {...action.payload.movieElement}
                ]
            }
        default:
            return state;
    }
};

export default saveListReducer;