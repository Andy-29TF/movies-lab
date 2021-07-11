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
        axios.get('https://gist.githubusercontent.com/Andy-29TF/f2e56a1310a349c612c51b4bc6182740/raw/362f840811f05988372e9733cbb167ddb82800f5/news.json')
            .then( resp => {
                dispatch(setNews(resp.data))
            })
            .catch( err =>{
                console.log(err+ "err")
            })
    }
}