const initialState = {
    news: []
};

function newsProcessingReducer(state = initialState, action) {
    
    switch(action.type) {
        case 'SET_NEWS':
            return {
                ...state,
                news: [...action.payload]
            };
        default:
            return state;
    }
};

export default newsProcessingReducer;