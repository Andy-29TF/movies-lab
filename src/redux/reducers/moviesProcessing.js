const initialState = {
    rawMovies: []
};

function moviesProcessingReducer(state = initialState, action) {

    switch(action.type) {
        case 'SET_RAW_MOVIES':
            const receivedMovis = action.payload.reverse()
            return {
                ...state,
                rawMovies: [...receivedMovis]
            };
        case 'CHANGE_IN_SAVE_LIST':
            const findIndexForAdd = state.rawMovies.findIndex( elem => elem.id === action.payload.movieElement.id);
            const newRawMoviesForAdd = [...state.rawMovies];

            if(action.payload.instructionsForMovieElement.instructions === "addToWantToSeeInstruction"){
                newRawMoviesForAdd[findIndexForAdd].saveList = {wantToSee: true, watched: false, loveIt: false};
            }else if(action.payload.instructionsForMovieElement.instructions === "addToWatchedInstruction") {
                newRawMoviesForAdd[findIndexForAdd].saveList = {wantToSee: false, watched: true, loveIt: false};
            }else {
                newRawMoviesForAdd[findIndexForAdd].saveList = {wantToSee: false, watched: false, loveIt: true};
            }

            return {
                rawMovies: [...newRawMoviesForAdd]
            }
        case 'TAKE_OUT_OF_SAVE_LIST':
            const findIndexForRemove = state.rawMovies.findIndex( elem => elem.id === action.payload.movieElement.id);
            const newRawMoviesForRemove = [...state.rawMovies];
            newRawMoviesForRemove[findIndexForRemove].saveList = {wantToSee: false, watched: false, loveIt: false};
            return {
                rawMovies: [...newRawMoviesForRemove]
            }
        default:
            return state;
    }
}

export default moviesProcessingReducer;