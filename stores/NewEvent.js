import { observable, action, computed, toJS } from "mobx"
import moment from 'moment'
// import { observer } from 'mobx-react'

class NewEvent {
    @observable image = null
    @observable title = ''
    @observable description = ''
    @observable organizers = [
        {
            index: 0,
            name: 'Shanel',
            avatar_url: require('../assets/images/user2.jpg'),
            checked: false
        },
        {
            index: 1,
            name: 'Prashanth',
            avatar_url: require('../assets/images/user3.jpg'),
            checked: false
        },
        {
            index: 2,
            name: 'Griffin',
            avatar_url: require('../assets/images/user4.jpg'),
            checked: false
        },
        {
            index: 3,
            name: 'Iryna',
            avatar_url: require('../assets/images/user5.jpg'),
            checked: false
        },
        {
            index: 4,
            name: 'Daniel',
            avatar_url: require('../assets/images/user6.jpg'),
            checked: false
        },
        {
            index: 5,
            name: 'Salil',
            avatar_url: require('../assets/images/user7.jpg'),
            checked: false
        },
        {
            index: 6,
            name: 'John',
            avatar_url: require('../assets/images/user8.jpg'),
            checked: false
        },
        {
            index: 7,
            name: 'Jane',
            avatar_url: require('../assets/images/user3.jpg'),
            checked: false
        },
        {
            index: 8,
            name: 'Roxen',
            avatar_url: require('../assets/images/user5.jpg'),
            checked: false
        }
    ]
    @observable contributors = [
        {
            index: 0,
            name: 'Shanel',
            avatar_url: require('../assets/images/user2.jpg'),
            checked: false
        },
        {
            index: 1,
            name: 'Prashanth',
            avatar_url: require('../assets/images/user3.jpg'),
            checked: false
        },
        {
            index: 2,
            name: 'Griffin',
            avatar_url: require('../assets/images/user4.jpg'),
            checked: false
        },
        {
            index: 3,
            name: 'Iryna',
            avatar_url: require('../assets/images/user5.jpg'),
            checked: false
        },
        {
            index: 4,
            name: 'Daniel',
            avatar_url: require('../assets/images/user6.jpg'),
            checked: false
        },
        {
            index: 5,
            name: 'Salil',
            avatar_url: require('../assets/images/user7.jpg'),
            checked: false
        },
        {
            index: 6,
            name: 'John',
            avatar_url: require('../assets/images/user8.jpg'),
            checked: false
        },
        {
            index: 7,
            name: 'Jane',
            avatar_url: require('../assets/images/user3.jpg'),
            checked: false
        },
        {
            index: 8,
            name: 'Roxen',
            avatar_url: require('../assets/images/user5.jpg'),
            checked: false
        }
    ]
    @observable endDate = moment().add(5, 'days').calendar()
}

export default new NewEvent()