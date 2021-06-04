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
        case 'REMOVE_FROM_MY_LIST':
            const newListWithTheSelectedItemRemoved = state.listOfAllSavedMovies.filter( elem => elem.id !== action.payload.movieElement.id)
            return {
                listOfAllSavedMovies: [
                    ...newListWithTheSelectedItemRemoved
                ]
            }
        default:
            return state;
    }
};

export default saveListReducer;