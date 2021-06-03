import axios from "axios";
import { addToMyList } from "./saveList";

export function setRawMovies(payload) {
    return {
        type: 'SET_RAW_MOVIES',
        payload
    }
}

export function changeInSaveList(payload) {
    return {
        type: 'CHANGE_IN_SAVE_LIST',
        payload
    }
}
export function takeOutOfSaveList(payload) {
    return {
        type: 'TAKE_OUT_OF_SAVE_LIST',
        payload
    }
}

// thunk function
export function fetchRawMovies() {
    return (dispatch) => {
        axios.get('https://gist.githubusercontent.com/Andy-29TF/6ea8139b7bbdce60085f96911b9494f7/raw/0ee2ef514b3b51dcf24fe3888afc634fd728b111/movies.json')
            .then( resp => {
                dispatch(setRawMovies(resp.data))
            })
            .catch( err =>{
                console.log(err+ "err")
            })
    }
  }

export function handleAddToSaveList(payload) {
        return ( dispatch ) => {
            dispatch(changeInSaveList(payload))
            dispatch(addToMyList(payload))
        }
}