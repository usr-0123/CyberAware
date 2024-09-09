import { v4 } from "uuid";
import { dataFound, sendNotFound, sendServerError, successMessage } from "../helpers/helperFunctions.js";
import { createQuestionService, deleteQuestionService, fetchQuestionsService, fetchQuestionsWithCategoryService, updateQuestionService } from "../services/questionsService.js";
import { questionValidator } from "../validators/questionValidators.js";

export const createNewQuestionController = async (req, res) => {
    try {
        const { questionWeight, questionCategoryId, questionText } = req.body;

        const valid = questionValidator(req.body);

        if (valid.error) {
            return sendServerError(res, valid.error.message)
        };

        const questions = await fetchQuestionsService();

        const questionExists = questions.rowsAffected[0] > 0 && questions.recordset.some(question => question.questionText === questionText);

        if (questionExists) {
            return sendServerError(res, 'Question entry already exists.');
        } else {
            const questionId = v4();
            const createdDate = new Date();
            const result = await createQuestionService({ questionWeight, questionCategoryId, questionText, questionId, createdDate });
            if (result.rowsAffected[0] > 0) {
                successMessage(res, 'Question created successfully.');
            } else {
                sendServerError(res, 'A problem occured while creating a new question. Please try again.');
            };
        };

    } catch (error) {
        return sendServerError(res, error.message);
    };
};

export const fetchAllQuestionsController = async (req, res) => {
    try {
        const result = await fetchQuestionsService();
        if (result.rowsAffected > 0) {
            return dataFound(res, result.recordset, 'All questions fetched.');
        } else {
            return successMessage(res, 'No question entry found.');
        }
    } catch (error) {
        return sendServerError(res, error.message);
    }
};

export const fetchQuestionByIdController = async (req, res) => {
    let params;

    params = { questionId: req.params.questionId };

    try {
        const result = await fetchQuestionsService(params);
        if (result.rowsAffected > 0) {
            return dataFound(res, result.recordset, 'Question entry fetched.');
        } else {
            return sendNotFound(res, 'No question entry found.');
        };
    } catch (error) {
        return sendServerError(res, error.message);
    };
};

export const fetchQuestionsWithCategoryController = async (req, res) => {

    try {
        const result = await fetchQuestionsWithCategoryService();
        if (result.rowsAffected > 0) {
            return dataFound(res, result.recordset, 'Question entries fetched.');
        } else {
            return sendNotFound(res, 'No question entry found.');
        };
    } catch (error) {
        return sendServerError(res, error.message);
    };
};

export const fetchQuestionsWithCategoryByIdController = async (req, res) => {
    let params;

    params = { questionId: req.params.questionId };

    try {
        const result = await fetchQuestionsWithCategoryService(params);
        if (result.rowsAffected > 0) {
            return dataFound(res, result.recordset, 'Question entry fetched.');
        } else {
            return sendNotFound(res, 'No question entry found.');
        };
    } catch (error) {
        return sendServerError(res, error.message);
    };
};

export const updateQuestionController = async (req, res) => {
    try {

        const params = { questionId: req.params.questionId, ...req.body };

        const questionExists = await fetchQuestionsService(params);

        if (questionExists.rowsAffected > 0) {
            const questionFieldsUnchanged = questionExists.recordset.some(question => question.questionWeight === req.body.questionWeight || question.questionCategoryId === req.body.questionCategoryId || question.questionText === req.body.questionText);

            if (questionFieldsUnchanged) {
                return successMessage(res, 'Question fields are the same as this update. Please try a different field input.')
            }

            const response = await updateQuestionService(params);

            if (response.rowsAffected[0] > 0) {
                return successMessage(res, 'Question updated successfully.');
            } else {
                return sendServerError(res, 'There was a problem while updating question entry.');
            };
        }
    } catch (error) {
        return sendServerError(res, error.message);
    };
};

export const deleteQuestionController = async (req, res) => {
    const params = { questionId: req.params.questionId };
    
    try {
        const available_entry = await fetchQuestionsService(params);
        if (available_entry.rowsAffected[0] > 0) {
            const result = await deleteQuestionService(params);

            if (result.rowsAffected[0] > 0) {
                return successMessage(res, 'Question deleted successfully.');
            };

            return sendServerError(res, 'There was a problem while deleting the question. Please retry.');
        } else {
            return sendServerError(res, 'This question entry does not exist in the records.');
        };
    } catch (error) {
        return sendServerError(res, error.message);
    };
};