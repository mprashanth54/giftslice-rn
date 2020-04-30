import { observable, action, computed, toJS } from "mobx"
import axios from '../axios'
import Auth from './auth'
// import { observer } from 'mobx-react'

class ImageService {

    @action
    async uploadFile(result) {
        try {
            const formData = new FormData()
            let uriParts = result.uri.split('.');
            let fileName = uriParts[uriParts.length - 1];
            result.name = `Profile.${fileName}`
            formData.append('file', result)
            const resp = await axios.post('/uploads', formData, { headers: { token: Auth.authToken, 'Content-Type': 'multipart/form-data' } })
            return resp.data.name
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}

export default new ImageService()