export const createNewQuestionQuery = `INSERT INTO tbl_Questions (questionId, createdDate, questionWeight, questionCategoryId, questionText) VALUES (@questionId, @createdDate, @questionWeight, @questionCategoryId, @questionText)`;

export const fetchAllQuestionsQuery = `SELECT * FROM tbl_Questions `;

export const fetchQuestionsWithCategoryQuery = `SELECT 
    q.questionId, 
    q.createdDate, 
    q.questionWeight, 
    q.questionText, 
    c.categoryID,
    c.categoryName 
FROM 
    tbl_Questions q
JOIN 
    tbl_Categories c 
ON 
    q.questionCategoryId = c.categoryID `;

export const updateQuestionsQuery = (params) => {
    const queryFields = Object.keys(params).map(key => `${key} = '${params[key]}'`).join(', ');
    const query = `UPDATE tbl_Questions SET ${queryFields} WHERE questionId = '${params.questionId}'`;
    return query;
}

export const deleteQuestionsQuery = `DELETE FROM tbl_Questions WHERE questionId = `;