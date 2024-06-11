import User from '../models/User.js'

export default class UsersHelpers {

    createUser(newData) {
        const { id, name, age } = newData
        const user = new User(parseInt(id), name, parseInt(age))
        return user
    }
}