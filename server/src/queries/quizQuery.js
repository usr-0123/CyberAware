export const createNewQuiz = `INSERT INTO tbl_Quiz (quizId, questionId, response, userId, quizDate) VALUES (@quizId, @questionId, @response, @userId, @quizDate)`;

export const fetchAllQuizes = `SELECT * FROM tbl_Quiz`;

export const fetchQuizQuestionQuery = `
SELECT *
FROM 
    tbl_Quiz q
JOIN 
    tbl_Questions qs 
ON 
    q.questionId = qs.questionId
WHERE
    q.userId = `;

export const fetchQuizUserDetailsQuery = `
SELECT 
    u.firstName, 
    u.lastName, 
    u.emailAddress, 
    qz.response, 
    qz.quizDate, 
    qn.questionText
FROM 
    tbl_Users u
INNER JOIN 
    tbl_Quiz qz 
ON 
    u.userID = qz.userId
INNER JOIN 
    tbl_Questions qn 
ON 
    qz.questionId = qn.questionId`;

export const updateQuiz = (params) => {
    const queryFields = Object.keys(params).map(key => `${key} = '${params[key]}'`).join(', ');
    const query = `UPDATE tbl_Quiz SET ${queryFields} WHERE quizId = '${params.quizId}'`;
    return query;
};

export const deleteQuiz = `DELETE FROM tbl_Quiz WHERE quizId = `;