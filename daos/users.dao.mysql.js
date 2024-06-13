import Mysql from '../db/connections/Mysql.js';


export default class UsersDaoMysql extends Mysql {

    constructor() {
        super()
        this.table = 'usuarios'
        this.#createTable()
    }

    #createTable() {
        const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
            id INT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            age INT NOT NULL            
        )`
        this.connection.query(query)
    }

    async getAllUsers() {
        try {
            const query = `SELECT * FROM ${this.table}`
            const [result] = await this.connection.promise().query(query)
            return result
        }

        catch (err) {
            console.log('Problemas al obtener los usuarios')
            return []
        }
    }


    async getUserById(id) {
        const query = `SELECT * FROM ${this.table} WHERE id = ?`
        const [result] = await this.connection.promise().query(query, [id])
        return result
    }


    async getUsersByName(name) {
        const query = `SELECT * FROM ${this.table} WHERE name = '${name}'`
        const [result] = await this.connection.promise().query(query)
        return result
    }

    async addUser(user) {
        const { id, name, age } = user
        const query = `INSERT INTO ${this.table} VALUES (?,?,?)`
        const [result] = await this.connection.promise().query(query, [id, name, age])
        return result
    }


    async modifyUser(user) {
        const { id, name, age } = user
        const query = `UPDATE ${this.table} SET name = ?, age = ? WHERE id = ?`
        const [result] = await this.connection.promise().query(query, [name, age, id])
        return result
    }


    async deleteUser(id) {
        const query = `DELETE FROM ${this.table} WHERE id = ${id}`
        const [result] = await this.connection.promise().query(query)
        return result
    }
}