import { Router } from "express";

// import { verifyTokenMiddleware } from "../middlewares/userAuthMiddleware";

import { registerUserController, fetchUsersController, fetchUserByIdController, fetchUsersByEmailController, fetchUsersByUsernameController, updateUserDetailsController, deleteUserController, loginUserController, sendOTP } from '../controller/usersControllers.js'

const usersRouter = Router()

usersRouter.post('/users/register', registerUserController)
usersRouter.post('/user/login', loginUserController)
usersRouter.post('/user/sendOtp/email', sendOTP)
usersRouter.get('/users/all', fetchUsersController)
usersRouter.get('/user/id/:userID', fetchUserByIdController)
usersRouter.get('/user/email/:email', fetchUsersByEmailController)
usersRouter.get('/user/username/:userName', fetchUsersByUsernameController)
usersRouter.patch('/user/update/:userID', updateUserDetailsController)
usersRouter.delete('/user/delete/:userID', deleteUserController)

export default usersRouter;