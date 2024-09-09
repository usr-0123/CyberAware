export const registerUserQuery = `INSERT INTO tbl_Users ( userID, firstName, lastName, surName, userName, gender, emailAddress, usrPassword, phoneNumber, dateOfBirth, street)
VALUES ( @userID, @firstName, @lastName, @surName, @userName, @gender, @emailAddress, @usrPassword, @phoneNumber, @dateOfBirth, @street)`;

export const fetchUsersQuery = `SELECT userID, firstName, lastName, surName, userName, gender, emailAddress, phoneNumber, dateOfBirth, street, usrRole FROM tbl_Users`

export const authenticateUserQuery = `SELECT * FROM tbl_Users`

export const updateUserQuery = (userID, params) => {
    const queryFields = Object.keys(params).map(key => `${key} = '${params[key]}'`).join(', ')
    const query = `UPDATE tbl_Users SET ${queryFields} WHERE userID = '${userID}'`
    return query
}

export const deleteUserQuery = (userID) => {
    const query = `DELETE FROM tbl_Users WHERE userID = '${userID}'`
    return query
}