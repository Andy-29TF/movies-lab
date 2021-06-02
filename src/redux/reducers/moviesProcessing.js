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
        default:
            return state;
    }
}

export default moviesProcessingReducer;