import { observable, action, computed, toJS } from "mobx"
import axios from '../axios'
import Auth from './auth'
// import { observer } from 'mobx-react'

class Gift {
    @observable globalGifts = []
    @observable newGifts = []

    @action
    async getGlobalGifts() {
        try {
            console.log(Auth.authToken)
            const resp = await axios.get('/gifts/global', { headers: { token: Auth.authToken } })
            this.globalGifts = resp.data.gifts
            return resp.data.gifts
        } catch (err) {
            throw err
        }
    }

    @computed get totalCostInBasket() {
        let costs = this.newGifts.reduce((acc, gift) => {
            return acc + gift.price
        }, 0)
        return costs
    }
}

export default new Gift()