import UsersHelpers from '../helpers/users.helpers.js'
import UsersDaoMemory from '../db/daos/users.dao.memory.js'
import UsersDaoMysql from '../db/daos/users.dao.mysql.js'


export default class UsersControllers {

    constructor() {
        // this.db = new UsersDaoMemory()
        this.db = new UsersDaoMysql()
        this.helpers = new UsersHelpers()
    }


    getUsers = async (req, res) => {
        const users = await this.db.getAllUsers()
        res.json(users)
    }


    getUserById = async (req, res) => {
        const { id } = req.params
        const user = await this.db.getUserById(id)
        res.json(user)
    }


    getUsersByName = async (req, res) => {
        const { name } = req.query
        const result = await this.db.getUsersByName(name)
        res.json(result)
    }


    addUser = async (req, res) => {
        const user = this.helpers.createUser(req.body)
        const result = await this.db.addUser(user)
        res.json(result)
    }


    modifyUser = async (req, res) => {
        const user = this.helpers.createUser(req.body)
        const result = await this.db.modifyUser(user)
        res.json(result)
    }


    deleteUser = async (req, res) => {
        const { id } = req.params
        const result = await this.db.deleteUser(id)
        res.json(result)
    }
}