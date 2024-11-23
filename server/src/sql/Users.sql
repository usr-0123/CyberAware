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

INSERT INTO tbl_Users (userID, usrRole, firstName, lastName, surName, userName, gender, emailAddress, usrPassword, phoneNumber, dateOfBirth, street, profileURL) 
VALUES 
('2a649e7f-0a63-418a-8bad-7f18dd13433f', 'Admin', 'John', 'Doe', 'JohnDoe', 'jd', 1, 'johnDoe@gmail.com', '$2b$08$dZEmkJneMMCTIRhbbfJFt.apR/nyD79WrCXZLXAyN8DP6NZ6REP6q', '0722000000', NULL, 'Street', '');

-- For this user:
-- email: johnDoe@gmail.com
-- password: @Usr0123

select * from tbl_Users