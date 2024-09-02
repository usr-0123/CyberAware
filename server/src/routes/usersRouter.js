import { Router } from "express";

import { registerUserController, fetchUsersController, fetchUserByIdController, fetchUsersByEmailController, fetchUsersByUsernameController, updateUserDetailsController, deleteUserController, loginUserController, sendOTP, resetPasswordController, getOTP } from '../controller/usersControllers.js'
import { verifyTokenMiddleware } from "../middlewares/userAuthMiddleware.js";

const usersRouter = Router()

usersRouter.post('/users/register', registerUserController)
usersRouter.post('/user/login', loginUserController)
usersRouter.post('/user/sendOtp/email', sendOTP)
usersRouter.patch('/user/reset', resetPasswordController)
usersRouter.post('/users/getOtp',getOTP)
usersRouter.get('/users/all', verifyTokenMiddleware, fetchUsersController)
usersRouter.get('/user/id/:userID', fetchUserByIdController)
usersRouter.get('/user/email/:email', fetchUsersByEmailController)
usersRouter.get('/user/username/:userName', fetchUsersByUsernameController)
usersRouter.patch('/user/update/:userID', verifyTokenMiddleware, updateUserDetailsController)
usersRouter.delete('/user/delete/:userID', verifyTokenMiddleware, deleteUserController)

export default usersRouter;