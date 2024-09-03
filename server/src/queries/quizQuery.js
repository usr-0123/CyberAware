export const createNewQuiz = `INSERT INTO tbl_Quiz (quizId, userId, quizDate) VALUES (@quizId, @userId, @quizDate)`;

export const fetchAllQuizes = `SELECT * FROM tbl_Quiz`;

export const updateQuiz = (params) => {
    const queryFields = Object.keys(params).map(key => `${key} = '${params[key]}'`).join(', ');
    const query = `UPDATE tbl_Quiz SET ${queryFields} WHERE quizId = '${params.quizId}'`;
    return query;
};

export const deleteQuiz = `DELETE FROM tbl_Quiz WHERE quizId = `;