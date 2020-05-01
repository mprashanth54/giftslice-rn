import { observable, action, computed, toJS } from "mobx"
import moment from 'moment'
import User from './user'
// import { observer } from 'mobx-react'
import Gift from './gifts'
import axios from '../axios'
import Auth from './auth'
import ImageService from './image'
import Campaign from './campaign'

class NewEvent {
    @observable image = { uri: null }
    @observable title = ''
    @observable description = ''
    @observable organizers = []
    @observable contributors = []
    @observable endDate = moment().add(5, 'days').toDate()

    @action
    updateUsers(userList, users) {
        return users.map((user) => {
            const member = userList.find((member) => {
                if (member._id === user._id) return member
            })
            console.log(member)
            if (member) return member
            else {
                user.checked = false
                return user
            }

        })
    }

    async updateList() {
        try {
            const users = await User.getGlobal()
            this.organizers = this.updateUsers(this.organizers, users)
            this.contributors = this.updateUsers(this.contributors, users)
        } catch (err) {
            console.log(err)
        }

    }

    getSelectedPeople(list) {
        const people = list.filter(user => user.checked == true)
        return people.map((user) => {
            return user.email
        })
    }

    getSelectedGifts(gifts) {
        return gifts.map((gift) => {
            return gift._id
        })
    }

    @action
    reset() {
        this.contributors = []
        this.organizers = []
        this.title = ''
        this.image = { uri: null }
        this.description = ''
        Gift.newGifts = []
    }

    @action
    async publish() {
        try {
            const image = await ImageService.uploadFile(this.image)
            const event = {
                title: this.title,
                description: this.description,
                contributors: this.getSelectedPeople(this.contributors),
                organizers: this.getSelectedPeople(this.organizers),
                gifts: this.getSelectedGifts(Gift.newGifts),
                endDate: this.endDate,
                image: image
            }
            await axios.post('/campaigns', event, { headers: { token: Auth.authToken } })
            await Promise.all([Campaign.getMyCampaigns(), Campaign.getHomeContent()])
            this.reset()
            return true
        } catch (err) {
            console.log(err)
            return false
        }
    }
}

export default new NewEvent()