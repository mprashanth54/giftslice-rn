import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    // baseUrl: 'http://localhost:3000',
    timeout: 20000
});

export default instance