import { observable, action, computed } from "mobx"
import axios from '../axios'
import Auth from './auth'
// import { observer } from 'mobx-react'

class Campaign {
    @observable myCampaigns = []
    @observable allCampaigns = []

    @action
    async getMyCampaigns() {
        try {
            console.log("Campaigns")
            const resp = await axios.get('/campaigns/my', { headers: { token: Auth.authToken } })
            console.log(resp.data)
            this.myCampaigns = resp.data.campaigns
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    @action
    async getHomeContent() {
        try {
            console.log("Campaigns")
            const resp = await axios.get('/campaigns/home', { headers: { token: Auth.authToken } })
            console.log(resp.data)
            this.allCampaigns = resp.data.campaigns
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}

export default new Campaign()