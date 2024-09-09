CREATE TABLE tbl_Quiz
(
    quizId VARCHAR(255) PRIMARY KEY,
    questionId VarChar(255) NOT NULL,
    response VARCHAR(255) NOT NULL,
    userId VARCHAR(255) NOT NULL,
    quizDate DATE NOT NULL
);

SELECT
    u.firstName,
    u.lastName,
    u.emailAddress,
    qz.response,
    qz.quizDate,
    qn.questionText
FROM
    tbl_Users u
    Right JOIN
    tbl_Quiz qz
    ON 
    u.userID = qz.userId
    LEFT JOIN
    tbl_Questions qn
    ON 
    qz.questionId = qn.questionId;

SELECT *
FROM
    tbl_Quiz q
    JOIN
    tbl_Questions qs
    ON 
    q.questionId = qs.questionId
WHERE
    q.userId = 'cb4aeae0-fc73-4ed8-bf45-9237bed68b80';

SELECT *
FROM tbl_Quiz;

-- delete from tbl_Quiz where questionId = '947cb095-0e2d-47c9-9187-7e1758970293'

-- DROP TABLE tbl_Quiz;

SELECT
    u.*,
    qz.*,
    qn.*
FROM
    tbl_Users u
    INNER JOIN
    tbl_Quiz qz
    ON 
    u.userID = qz.userId
    INNER JOIN
    tbl_Questions qn
    ON 
    qz.questionId = qn.questionId
WHERE
    u.userId = 'cb4aeae0-fc73-4ed8-bf45-9237bed68b80';
