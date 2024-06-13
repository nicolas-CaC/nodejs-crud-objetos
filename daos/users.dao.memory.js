import usersMock from '../db/mocks/users.mock.js'


export default class UsersDaoMemory {

    constructor() {
        this.users = usersMock
    }

    getAllUsers() {
        return this.users
    }


    getUserById(id) {
        const user = this.users.find(user =>
            user.id === parseInt(id))
        return user
    }


    getUsersByName(name) {
        const result = this.users.filter(user =>
            user.name === name)
        return result
    }

    addUser(user) {
        this.users.push(user)
        return true
    }


    modifyUser(data) {
        let modifiedUser = null
        this.users = this.users.map(user => {
            if (user.id === data.id) {
                user = data
                modifiedUser = user
            }
            return user
        })
        return modifiedUser
    }


    deleteUser(id) {
        let oldLength = this.users.length
        this.users = this.users.filter(user =>
            user.id !== parseInt(id))
        return oldLength !== this.users.length
    }
}