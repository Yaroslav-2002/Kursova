import Router from 'express'
import UserController from "../controllers/UserController.js";

const userRouter = new Router()

userRouter.get('/getAllUsers', UserController.getAllUsers)
userRouter.put('/put/:id', UserController.update)

export default userRouter;