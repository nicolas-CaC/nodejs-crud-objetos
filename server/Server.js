import express from 'express'
import UsersRoutes from '../routes/users.routes.js'
import ProductsRoutes from '../routes/products.routes.js'

export default class Server {

    static app = express()


    static middlewares() {
        Server.app.use(express.json())
        Server.app.use(express.urlencoded({ extended: true }))
    }


    static routes() {
        const usersRoutes = new UsersRoutes()
        const productsRoutes = new ProductsRoutes()
        Server.app.use('/users', usersRoutes.router)
        Server.app.use('/products', productsRoutes.router)
    }


    static runServer(port) {
        Server.app.listen(port, () =>
            console.log(`listen at http://localhost:${port}`))
    }


    static run(port) {
        console.clear()
        Server.middlewares()
        Server.routes()
        Server.runServer(port)
    }
}