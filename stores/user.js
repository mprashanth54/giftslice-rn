import { observable, action, computed, toJS } from "mobx"
import axios from '../axios'
import Auth from './auth'
// import { observer } from 'mobx-react'

class User {
    @observable info = {}
    @observable permissions = {
        camera: false,
        files: true,
        sms: false,
        push_notification: false
    }


    @action
    async getUserInfo() {
        try {
            const resp = await axios.get('/users/me', { headers: { token: Auth.authToken } })
            this.info = resp.data
        } catch (err) {
            throw err
        }
    }

    async updateImage(file) {
        await axios.put('/users/me/image', { image: file }, { headers: { token: Auth.authToken } })
        await this.getUserInfo()
    }
}

export default new User()