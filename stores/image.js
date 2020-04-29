import { observable, action, computed, toJS } from "mobx"
import axios from '../axios'
import Auth from './auth'
// import { observer } from 'mobx-react'

class ImageService {

    @action
    async uploadFile(formData) {
        try {
            // const bodyFormData = new FormData()
            // console.log(file)
            // bodyFormData.append('file', file)
            const resp = await axios.post('/uploads', formData, { headers: { token: Auth.authToken, 'Content-Type': 'multipart/form-data' } })
            console.log(resp)
            return resp.data.name
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}

export default new ImageService()