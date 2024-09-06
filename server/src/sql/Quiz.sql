CREATE TABLE tbl_Quiz (
    quizId VARCHAR(255) PRIMARY KEY,
    questionId VarChar(255) NOT NULL,
    response VARCHAR(255) NOT NULL,
    userId VARCHAR(255) NOT NULL,
    quizDate DATE NOT NULL
);

SELECT *
FROM 
    tbl_Quiz q
JOIN 
    tbl_Questions qs 
ON 
    q.questionId = qs.questionId
WHERE
    q.userId = 'cb4aeae0-fc73-4ed8-bf45-9237bed68b80';

SELECT * FROM tbl_Quiz;

-- delete from tbl_Quiz where questionId = '947cb095-0e2d-47c9-9187-7e1758970293'

-- DROP TABLE tbl_Quiz;