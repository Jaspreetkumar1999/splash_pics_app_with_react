import axios from 'axios';

const KEY = 'AIzaSyAHPkPRHSBaCR8fQGvGP79qWN-r5BJ-US8';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY

    }
})
