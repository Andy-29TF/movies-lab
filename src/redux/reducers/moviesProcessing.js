const initialState = {
    rawMovies: []
};

function moviesProcessingReducer(state = initialState, action) {
    
    switch(action.type) {
        case 'SET_RAW_MOVIES':
            console.log(action)
            return {
                ...state,
                rawMovies: [...action.payload]
            };
        default:
            return state;
    }
}

export default moviesProcessingReducer;