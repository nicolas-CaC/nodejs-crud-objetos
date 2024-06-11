import User from '../models/User.js'

export default class UsersHelpers {

    createUser(newData) {
        const { id, name, age } = newData
        const user = new User(id, name, age)
        return user
    }
}