export function toggleSearchBar(payload) {
    return{
        type: 'TOGGLE_SEARCH_BAR',
        payload
    }
}

export function setTheSearchedTermFromSearchBar(payload) {
    return{
        type: 'SET_THE_SEARCHED_TERM_FROM_SEARCH_BAR',
        payload
    }
}