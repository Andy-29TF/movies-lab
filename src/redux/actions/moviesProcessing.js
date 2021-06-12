import axios from "axios";
// actions from saveList
import { addToMyList } from "./saveList";
import { removeFromMyList } from './saveList';

export function setRawMovies(payload) {
    return {
        type: 'SET_RAW_MOVIES',
        payload
    }
}

export function changesInSaveList(payload) {
    return {
        type: 'CHANGES_IN_SAVE_LIST',
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
        axios.get('https://gist.githubusercontent.com/Andy-29TF/6ea8139b7bbdce60085f96911b9494f7/raw/6b7f9be0731e7e14e9e2116ecca5889cd084a327/movies.json')
            .then( resp => {
                dispatch(setRawMovies(resp.data))
            })
            .catch( err =>{
                console.log(err+ "err")
            })
    }
  }

export function handleAddToOrRemoveFromSaveList(payload) {
    if(payload.instructionsForMovieElement.instructions !== "remove movie from MyList") {
        return (dispatch) => {
            dispatch(changesInSaveList(payload))
            dispatch(addToMyList(payload))
        }
    }else {
        return (dispatch) => {
            dispatch(takeOutOfSaveList(payload))
            dispatch(removeFromMyList(payload))
        }
    }
}
