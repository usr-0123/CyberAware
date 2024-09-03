import dotenv from 'dotenv'
import { poolrequest, sql } from '../utils/dbConnect.js'
import { authenticateUserQuery, deleteUserQuery, fetchUsersQuery, registerUserQuery, updateUserQuery } from '../queries/userQuery.js'

dotenv.config()

export const registerUserService = async (newUser) => {
    try {

        const result = await poolrequest()
            .input('userID', sql.VarChar, newUser.userID)
            .input('firstName', sql.VarChar, newUser.firstName)
            .input('lastName', sql.VarChar, newUser.lastName)
            .input('surName', sql.VarChar, newUser.surName)
            .input('userName', sql.VarChar, newUser.userName)
            .input('gender', sql.Int, newUser.gender)
            .input('emailAddress', sql.VarChar, newUser.emailAddress)
            .input('usrPassword', sql.VarChar, newUser.usrPassword)
            .input('phoneNumber', sql.VarChar, newUser.phoneNumber)
            .input('dateOfBirth', sql.Date, newUser.dateOfBirth)
            .input('street', sql.VarChar, newUser.street)
            .query(registerUserQuery)

        return result

    } catch (error) {
        return error
    }
}

export const fetchUsersService = async (params) => {

    let query = ''

    if (!params) {
        query = fetchUsersQuery
    } else {
        
        if (params.userID) {
            query = fetchUsersQuery + ` WHERE userID = '${params.userID}'`
        }
        
        if (params.emailAddress) {
            switch (params.usrPassword) {
                case params.usrPassword:
                    query = authenticateUserQuery + ` WHERE emailAddress = '${params.emailAddress}'`
                    break
                default:
                    query = fetchUsersQuery + ` WHERE emailAddress = '${params.emailAddress}'`
            }
        }

        if (params.userName) {
            switch (params.usrPassword) {
                case params.usrPassword:
                    query = authenticateUserQuery + ` WHERE userName = '${params.userName}'`
                    break
                default:
                    query = fetchUsersQuery + ` WHERE userName = '${params.userName}'`
            }
        }
    }

    try {
        const result = await poolrequest().query(query)
        return result
    } catch (error) {
        return error
    }
}

export const updateUserService = async (userID, params) => {
    
    let query = updateUserQuery(userID, params)

    try {
        const result = await poolrequest().query(query)
        return result
    } catch (error) {
        return error
    }
}

export const deleteUserService = async (userID) => {
    let query = deleteUserQuery(userID)

    try {
        const result = await poolrequest().query(query)
        return result
    } catch (error) {
        return error
    }
}