export function addToMyList(payload) {
    return{
        type: 'ADD_TO_MY_LIST',
        payload
    }
}

export function removeFromMyList(payload) {
    return{
        type: 'REMOVE_FROM_MY_LIST',
        payload
    }
}