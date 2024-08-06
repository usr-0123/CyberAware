import bcrypt from 'bcrypt'
import { v4 } from "uuid"
import jwt from 'jsonwebtoken'

import { deleteUserService, fetchUsersService, registerUserService, updateUserService } from "../services/userServices.js";

import { conflict, dataFound, sendCreated, sendDeleteSuccess, sendNotFound, sendServerError, successMessage } from "../helpers/helperFunctions.js";

import { userValidator } from "../validators/usersValidators.js";
import { sendMail } from '../templates/emailTemp.js';

export const registerUserController = async (req, res) => {

    try {
        const { firstName, lastName, surName, userName, gender, emailAddress, usrPassword, phoneNumber } = req.body;
        
        const validation = userValidator( {firstName, lastName, surName, userName, gender, emailAddress, usrPassword, phoneNumber} )
        
        if (validation.error) {
            return sendServerError(res, validation.error.message)
        } else {
            const usernameExist = await fetchUsersService({userName:req.body.userName})
            const emailExist = await fetchUsersService({emailAddress:req.body.emailAddress})

            if (+usernameExist.recordset.length !== 0) {
                return conflict(res, 'Username already exists')
            } else if (+emailExist.recordset !== 0) {
                return conflict(res, 'Email address already exists')
            } else {
                const id = v4()

                const hashedPassword = await bcrypt.hash(usrPassword, 8)

                function NameCase(params) {
                    let formattedName = params.charAt(0).toUpperCase() + params.slice(1).toLowerCase()
                    return formattedName;
                }

                const registerUser = {
                    userID: id.toLowerCase(), 
                    firstName: NameCase(firstName), 
                    lastName: NameCase(lastName),
                    surName: NameCase(surName),
                    userName: userName.toLowerCase(), 
                    gender, 
                    emailAddress: emailAddress.toLowerCase(),
                    usrPassword: hashedPassword, 
                    phoneNumber
                }

                const result = await registerUserService(registerUser)

                if (result.message) {
                    sendServerError(res, result.message)
                } else {
                    if (result.rowsAffected == 1) {
                        const mailOptions = {
                            option:'register',
                            Email_address: registerUser.emailAddress,
                            data: `${registerUser.firstName} ${registerUser.lastName}`
                        }
                        
                        sendMail(res, mailOptions)
                        sendCreated(res, 'Employee created successfully')
                    }
                }
            }
        }

    } catch (error) {
        sendServerError(res, error.message)
    }

}

export const loginUserController = async (req, res) => {

    try {
        const user = await fetchUsersService(req.body)

        if (+user.recordset.length == 0) {
            return sendNotFound(res, 'No user found with the details')
        } else {
            const validPass = await bcrypt.compare(`${req.body.usrPassword}`,`${user.recordset[0].usrPassword}`)

            if (validPass) {
                const token = jwt.sign({
                    userID:user.recordset[0].userID,
                    emailAddress:user.recordset[0].emailAddress,
                    userName:user.recordset[0].userName
                }, process.env.JWT_SECRET, {expiresIn: "24h"})

                const mailOptions = {
                    option:'login',
                    Email_address: user.recordset[0].emailAddress,
                    data: `${user.recordset[0].firstName} ${user.recordset[0].lastName}`
                }
                
                sendMail(res, mailOptions)

                return dataFound(res,token, 'Login successful')
            } else {
                return sendNotFound(res, 'Wrong login credentials')
            }
        }
        
    } catch (error) {
        sendServerError(res, `Error: ${error.message}`)
    }

}

export const fetchUsersController = async (req, res) => {

    try {
        const result = await fetchUsersService()
        if (result.rowsAffected > 0) {
            return dataFound(res, result.recordset, 'All users records fetched')
        } else {
            return successMessage(res, 'No users records found')
        }

    } catch (error) {
        sendServerError(res, error)
    }

}

export const fetchUserByIdController = async (req, res) => {

    try {
        const result = await fetchUsersService(req.params)

        if (result.rowsAffected > 0) {
            return dataFound(res, result.recordset, `User data with the given id, was fetched`)
        } else {
            return sendNotFound(res,`No user records found for the given id`)
        }

    } catch (error) {
        sendServerError(res, error)
    }

}

export const fetchUsersByEmailController = async (req, res) => {

    const params = {emailAddress:req.params.email}

    try {
        const result = await fetchUsersService(params)
        
        if (result.rowsAffected > 0) {
            return dataFound(res, result.recordset, `User data with the email ${params.emailAddress}, fetched`)
        } else {
            return sendNotFound(res,`No user with the email address ${params.emailAddress}, records found`)
        }

    } catch (error) {
        sendServerError(res, error)
    }

}

export const fetchUsersByUsernameController = async (req, res) => {

    const username = req.params

    const params = {
        userName:username.userName
    }

    try {
        const result = await fetchUsersService(params)
        if (result.rowsAffected > 0) {
            return dataFound(res, result.recordset, `User data with the username ${params.userName}, fetched`)
        } else {
            return successMessage(res,`No user with the username ${params.userName}, records found`)
        }
    } catch (error) {
        sendServerError(res, error)
    }

}

export const updateUserDetailsController = async (req, res) => {

    const userID = req.params.userID

    const params = {userID:userID }

    const available_entry = await fetchUsersService(params)

    if (available_entry.rowsAffected > 0) {
        
        try {
            const result = await updateUserService(req.params.userID, req.body)

            if (result.rowsAffected > 0) {

                const mailOptions = {
                    option:'update',
                    Email_address: available_entry.recordset[0].emailAddress,
                    data: `${available_entry.recordset[0].firstName} ${available_entry.recordset[0].lastName}`
                }

                sendMail(res, mailOptions)
                return dataFound(res, result.recordset, `User record updated successfully`)
            } else {
                return successMessage(res, `Details not updated!`)
            }

        } catch (error) {
            sendServerError(res, error)
        }

    } else {
        return sendNotFound(res, 'No user record to delete was found') 
    }

}

export const deleteUserController = async (req, res) => {

    const userID = req.params.userID

    const params = {
        userID:userID
    }

    const available_entry = await fetchUsersService(params)

    if (available_entry.rowsAffected > 0) {
    
        try {
            const result = await deleteUserService(userID)

            if (result.rowsAffected > 0) {

                const mailOptions = {
                    option:'update',
                    Email_address: available_entry.recordset[0].emailAddress,
                    data: `${available_entry.recordset[0].firstName} ${available_entry.recordset[0].lastName}`
                }
                
                sendMail(res, mailOptions)
                return sendDeleteSuccess(res, 'Entry deleted successfully')
            } else {
                return sendServerError(res, 'There was a problem occurred while deleting record')
            }
        } catch (error) {
            sendServerError(res, error)
        }

    } else {
        return sendNotFound(res, 'No user record to delete was found') 
    }

}