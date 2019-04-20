import axios from 'axios';

const KEY = 'AIzaSyDj_euD56CkFpfWXFM2UJE4lLxOIpXy0Gg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY

    }
});

