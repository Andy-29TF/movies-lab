const initialState = {
    wantToSee: [],
    watched: [],
    loveIt: []
};

function saveListReducer(state = initialState, action) {
    
    switch(action.type) {
        case 'ADD_TO_CART_WANT_TO_SEE':
            return {
                ...state,
                wantToSee: [
                    ...state.wantToSee,
                    action.payload.movieElement
                ]
            };
        default:
            return state;
    }
};

export default saveListReducer;