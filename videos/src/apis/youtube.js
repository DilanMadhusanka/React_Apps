import axios from 'axios';

const KEY = 'AIzaSyCe2y1QuxlflA--7wFhHDzFfI35BLwDi4E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});