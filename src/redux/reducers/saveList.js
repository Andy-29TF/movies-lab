const initialState = {
    wantToSee: [],
    watched: [],
    loveIt: []
};

function saveListReducer(state = initialState, action) {
    
    switch(action.type) {
        case 'ADD_TO_MY_LIST':
            if(action.payload.instructionsForMovieElement.instructions === "addToWantToSeeInstruction"){
                return {
                    ...state,
                    wantToSee: [
                        ...state.wantToSee,
                        action.payload.movieElement
                    ]
                };
            }else if(action.payload.instructionsForMovieElement.instructions === "addToWatchedInstruction") {
                return {
                    ...state,
                    watched: [
                        ...state.watched,
                        action.payload.movieElement
                    ]
                };
            }else {
                return {
                    ...state,
                    loveIt: [
                        ...state.loveIt,
                        action.payload.movieElement
                    ]
                };
            }
        default:
            return state;
    }
};

export default saveListReducer;