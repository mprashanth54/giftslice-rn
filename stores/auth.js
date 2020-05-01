import { observable, action } from "mobx"
import axios from '../axios'

class Auth {
    @observable authToken = ''

    @action
    async login(email, pass) {
        try {
            const resp = await axios.post('/auth/login', { email: email, pass: pass })
            const { token } = resp.data
            this.authToken = token
            return true
        } catch (err) {
            return false
        }
    }

    async register(registrationData) {
        try {
            await axios.post('/auth/register', registrationData)
            return true
        } catch (err) {
            console.log(err)
            return false
        }
    }
}

export default new Auth()