import * as axios from 'axios'
import { observer } from 'mobx-react'
import Auth from './stores/auth'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: { 'Authorization': '' }
});

export default instance