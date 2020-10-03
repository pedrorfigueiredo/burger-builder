import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-app-63615.firebaseio.com/'
});

export default instance;