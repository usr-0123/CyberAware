import { createNewQuiz, deleteQuiz, fetchAllQuizes, fetchQuizQuestionQuery, fetchQuizUserDetailsQuery, updateQuiz } from "../queries/quizQuery.js";
import { poolrequest, sql } from "../utils/dbConnect.js";

export const createQuestionService = async (newQuiz) => {

    try {
        const result = await poolrequest()
            .input('quizId', sql.VarChar, newQuiz.quizId)
            .input('questionId', sql.VarChar, newQuiz.questionId)
            .input('response', sql.VarChar, newQuiz.response)
            .input('userId', sql.VarChar, newQuiz.userId)
            .input('quizDate', sql.DateTime, newQuiz.quizDate)
            .query(createNewQuiz)

        return result;
    } catch (error) {
        return error;
    }
};

export const fetchQuizService = async (params) => {

    let query;

    if (!params) {
        query = fetchAllQuizes;
    } else {
        if (params.userId) {
            query = fetchAllQuizes + ` where userId = '${params.userId}'`;
        };

        if (params.quizId) {
            query = fetchAllQuizes + ` where quizId = '${params.quizId}'`;
        };

        if (params.questionId) {
            query = fetchAllQuizes + ` where questionId = '${params.questionId}'`;
        };
    };

    try {
        const result = await poolrequest()
            .query(query);
        return result;
    } catch (error) {
        return error;
    };
};

export const fetchQuizQuestionByQuizidService = async (params) => {

    if (!params && !params.userId) {
        return { errorMessage: 'Some fetch fields are not provided.' };
    };

    let query = fetchQuizQuestionQuery + `'${params.userId}'`

    try {
        const result = await poolrequest().query(query);
        return result;
    } catch (error) {
        return error;
    };
};

export const fetchQuizUserDetailsService = async () => {
    try {
        const result = await poolrequest().query(fetchQuizUserDetailsQuery);
        return result;
    } catch (error) {
        return error;
    };
};

export const updateQuizService = async (params) => {

    if (!params.quizDate && (!params.quizDate && !params.userId && !params.questionId)) {
        return { errorMessage: 'Please provide the required fields.' };
    };

    let query = updateQuiz(params);

    try {
        const result = await poolrequest().query(query);
        return result;
    } catch (error) {
        return error;
    };

};

export const deleteQuizService = async (params) => {
    let query = deleteQuiz + `'${params.quizId}'`;

    try {
        const result = await poolrequest().query(query);
        return result;
    } catch (error) {
        return error;
    };

};