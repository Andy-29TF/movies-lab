import axios from "axios";

export function setNews(payload) {
    return {
        type: 'SET_NEWS',
        payload
    }
}


// thunk function
export function fetchRawNews() {
    return (dispatch) => {
        axios.get('https://gist.githubusercontent.com/Andy-29TF/f2e56a1310a349c612c51b4bc6182740/raw/d5e86ef441a823f56c4dae28abf89331dddd3a4a/news.json')
            .then( resp => {
                dispatch(setNews(resp.data))
            })
            .catch( err =>{
                console.log(err+ "err")
            })
    }
}