import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://giftslice.herokuapp.com',
    timeout: 20000
});

export default instance