import { createNewQuestionQuery, deleteQuestionsQuery, fetchAllQuestionsQuery, fetchQuestionsWithCategoryQuery, updateQuestionsQuery } from "../queries/questionsQuery.js";

import { poolrequest, sql } from "../utils/dbConnect.js";

export const createQuestionService = async (newQuestion) => {
    try {

        const result = await poolrequest()
            .input('questionId', sql.VarChar, newQuestion.questionId)
            .input('createdDate', sql.Date, newQuestion.createdDate)
            .input('questionWeight', sql.Int, newQuestion.questionWeight)
            .input('questionCategoryId', sql.VarChar, newQuestion.questionCategoryId)
            .input('questionText', sql.VarChar, newQuestion.questionText)
            .query(createNewQuestionQuery)

        return result;

    } catch (error) {
        return error;
    };
};

export const fetchQuestionsService = async (params) => {
    let query;

    if (!params) {
        query = fetchAllQuestionsQuery;
    } else {
        query = fetchAllQuestionsQuery + ` WHERE questionId = '${params.questionId}'`;
    };

    try {
        const result = await poolrequest()
            .query(query);
        return result;
    } catch (error) {
        return error;
    }
};

export const fetchQuestionsWithCategoryService = async (params) => {

    let query;

    if (!params) {
        query = fetchQuestionsWithCategoryQuery;
    } else {
        query = fetchQuestionsWithCategoryQuery + ` WHERE c.categoryID = '${params.categoryID}'`;
    };

    try {
        const result = await poolrequest()
            .query(query);
        return result;
    } catch (error) {
        return error;
    };

};

export const updateQuestionService = async (params) => {

    if (!params.questionId &&
        (!params.questionWeight || !params.questionCategoryId || !params.questionText)) {
        return { errorMessage: 'Please provide the required fields.' };
    };

    let query = updateQuestionsQuery(params);

    try {
        const result = await poolrequest().query(query);
        return result;
    } catch (error) {
        return error;
    };
};

export const deleteQuestionService = async (params) => {
    let query = deleteQuestionsQuery + `'${params.questionId}'`;

    try {
        const result = await poolrequest().query(query);
        return result;
    } catch (error) {
        return error;
    };
};