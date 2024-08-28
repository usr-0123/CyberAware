CREATE TABLE tbl_Users (
    userID VarChar(255) PRIMARY KEY,
    usrRole VARCHAR(10) DEFAULT 'User',
    firstName VarChar(255),
    lastName VarChar(255),
    surName VarChar(255),
    userName VarChar(255),
    gender Bit DEFAULT 0,
    emailAddress VarChar(255),
    usrPassword VarChar(255),
    phoneNumber VarChar(255),
    dateOfBirth Date,
    street VarChar(255),
    profileURL VarChar(255)
);

-- DROP TABLE tbl_Users;
-- DELETE FROM tbl_Users;
SELECT * FROM tbl_Users;

DELETE FROM tbl_Users
WHERE userID = '2a649e7f-0a63-418a-8bad-7f18dd13433f'

-- SELECT * FROM tbl_Users WHERE userID = '052cd733-5914-44d8-a668-605f5c4b0766'

UPDATE tbl_Users 
SET  
    firstName = "Johnte", 
    lastName = "DoeDoe", 
    surName = "Does", 
    userName = "jid5", 
    emailAddress = "jdoe@examplee.com", 
    usrPassword = "12345", 
    phoneNumber = "0782354733", 
    gender = "1"
WHERE userID = "2a649e7f-0a63-418a-8bad-7f18dd13433f"