import axios from 'axios';

const KEY = 'AIzaSyALQnLg_Tw-vrmo1knZfdkso6j84wgoOho';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
})
