const initialState = {
    themeType: "dark"
};

function themeReducer(state = initialState, action) {
    switch(action.type) {
        case 'TOGGLE_THEME':
            if(state.themeType === "light") {
                return {
                    themeType: "dark"
                }
            }else {
                return {
                    themeType: "light"
                }
            }
        default:
            return state;
    }
};

export default themeReducer;