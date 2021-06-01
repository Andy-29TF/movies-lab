import axios from "axios";

export function setRawMovies(payload) {
    return {
        type: 'SET_RAW_MOVIES',
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