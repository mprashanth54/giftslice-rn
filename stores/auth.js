import { observable, action } from "mobx"
import axios from '../axios'

class Auth {
    @observable authToken = ''

    @action
    async login(email, pass) {
        try {
            const resp = await axios.post('/auth/login', { email: email, pass: pass })
            console.log(resp)
            const { token } = resp.data
            this.authToken = token
            return true
        } catch (err) {
            return false
        }

    }
}

export default new Auth()