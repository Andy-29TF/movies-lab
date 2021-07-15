const initialState = {
    rawMovies: [],
    loaded: false
};

function moviesProcessingReducer(state = initialState, action) {

    switch(action.type) {
        case 'SET_RAW_MOVIES':
            if(state.rawMovies.length > 0){
                return state;
            }else {
                const receivedMovis = action.payload.reverse()
                return {
                    ...state,
                    rawMovies: [...receivedMovis],
                    loaded: true
                };
            }
        case 'CHANGES_IN_SAVE_LIST':
            const findIndexForAdd = state.rawMovies.findIndex( elem => elem.id === action.payload.movieElement.id);
            const newRawMoviesForAdd = [...state.rawMovies];

            if(action.payload.instructionsForMovieElement.instructions === "add to want to see"){
                newRawMoviesForAdd[findIndexForAdd].saveList = {wantToSee: true, watched: false, loveIt: false};
            }else if(action.payload.instructionsForMovieElement.instructions === "add to watched") {
                newRawMoviesForAdd[findIndexForAdd].saveList = {wantToSee: false, watched: true, loveIt: false};
            }else {
                newRawMoviesForAdd[findIndexForAdd].saveList = {wantToSee: false, watched: false, loveIt: true};
            }

            return {
                ...state,
                rawMovies: [...newRawMoviesForAdd]
            }
        case 'TAKE_OUT_OF_SAVE_LIST':
            const findIndexForRemove = state.rawMovies.findIndex( elem => elem.id === action.payload.movieElement.id);
            const newRawMoviesForRemove = [...state.rawMovies];
            newRawMoviesForRemove[findIndexForRemove].saveList = {wantToSee: false, watched: false, loveIt: false};
            return {
                ...state,
                rawMovies: [...newRawMoviesForRemove]
            }
        default:
            return state;
    }
}

export default moviesProcessingReducer;