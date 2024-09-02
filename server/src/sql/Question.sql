CREATE TABLE tbl_Questions
(
    questionId VarChar(255) PRIMARY KEY,
    createdDate Date,
    questionWeight INT,
    questionCategoryId VarChar(255),
    questionText VarChar(999),
);

SELECT * FROM tbl_Questions;