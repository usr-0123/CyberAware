-- CREATE TABLE tbl_Questions
-- (
--     questionId VarChar(255) PRIMARY KEY,
--     createdDate Date,
--     questionWeight INT,
--     questionCategoryId VarChar(255),
--     questionText VarChar(999),
-- );

SELECT
    q.questionId,
    q.createdDate,
    q.questionWeight,
    q.questionText,
    c.categoryName
FROM
    tbl_Questions q
    JOIN
    tbl_Categories c
    ON 
    q.questionCategoryId = c.categoryID;


SELECT *
FROM tbl_Questions;

-- delete from tbl_Questions WHERE questionWeight = 15