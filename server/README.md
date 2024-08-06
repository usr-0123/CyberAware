```sql
-- users table
CREATE TABLE tbl_Users (
    userID VarChar(255) PRIMARY KEY,
    usrRole Bit DEFAULT 0,
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
)

```
## Common Ports
80: HTTP (default for web servers)
443: HTTPS (secure web servers)
8080: HTTP alternative (often used for development)
3000: Commonly used for development servers (e.g., Node.js)
5000: Commonly used for development (e.g., Flask)
## Reserved Ports
Ports 0-1023 are known as "well-known" ports and are typically reserved for system or widely-used services. Avoid using these for custom APIs unless you know the specific service and its requirements.

## Dynamic and Private Ports
Ports 49152-65535 are the dynamic or private ports, which are less likely to be in use and are often used for custom applications.

## Checking Available Ports
To check which ports are currently in use on your Windows 11 system, you can use the following command in Command Prompt:

```
netstat -a -n -o
```
This command will list all active connections and listening ports along with the process ID (PID) that is using each port. You can identify and ensure that the port you want to use is available.