import Routes from "./routes.js";
import UsersControllers from "../controllers/users.controllers.js";

export default class UsersRoutes extends Routes {

    constructor() {
        super()
        this.controller = new UsersControllers()
        this.getRoutes()
    }

    getRoutes() {
        this.router
            .get('/', this.controller.getUsers)
            .get('/user', this.controller.getUsersByName)
            .get('/:id', this.controller.getUserById)
            .post('/', this.controller.addUser)
            .put('/', this.controller.modifyUser)
            .delete('/:id', this.controller.deleteUser)
    }
}
