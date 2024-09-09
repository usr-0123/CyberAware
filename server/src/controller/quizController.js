import { v4 } from "uuid";
import { dataFound, sendServerError, successMessage } from "../helpers/helperFunctions.js";
import { createQuestionService, deleteQuizService, fetchQuizService, updateQuizService, fetchQuizQuestionByQuizidService, fetchQuizUserDetailsService } from "../services/quizService.js";

export const createNewQuizController = async (req, res) => {

    try {
        const quizId = v4();

        const questionExists = await fetchQuizService({ questionId: req.body.questionId });

        if (questionExists && questionExists.recordset.length > 0) {
            return sendServerError(res, 'The question already has a response. Try updating if you have a different response.');
        };

        const result = await createQuestionService({ quizId, ...req.body });

        if (result.rowsAffected && result.rowsAffected[0] > 0) {
            successMessage(res, 'Quiz created successfully.');
        } else {
            sendServerError(res, 'A problem occured while creating a new quiz. Please try again.');
        };

    } catch (error) {
        return sendServerError(res, error.message);
    };
};

export const fetchAllQuizController = async (req, res) => {
    try {
        const result = await fetchQuizService();
        if (result.rowsAffected && result.rowsAffected > 0) {
            return dataFound(res, result.recordset, 'All quizes fetched.');
        } else {
            return successMessage(res, 'No quiz entry found.');
        };
    } catch (error) {
        return sendServerError(res, error.message);
    };
};

export const fetchQuizByIdController = async (req, res) => {
    try {
        const result = await fetchQuizService(req.params);

        if (result.rowsAffected && result.rowsAffected > 0) {
            return dataFound(res, result.recordset, 'All quizes fetched.');
        } else {
            return successMessage(res, 'No quiz entry found.');
        };
    } catch (error) {
        return sendServerError(res, error.message);
    };
};

export const fetchQuizByUserIdController = async (req, res) => {

    try {
        const result = await fetchQuizService(req.params);
        if (result.rowsAffected && result.rowsAffected > 0) {
            return dataFound(res, result.recordset, 'All quizes fetched.');
        } else {
            return successMessage(res, 'No quiz entry found.');
        };
    } catch (error) {
        return sendServerError(res, error.message);
    };
};

export const fetchQuizByQuestionIdController = async (req, res) => {

    try {
        const result = await fetchQuizService(req.params);
        if (result.rowsAffected && result.rowsAffected > 0) {
            return dataFound(res, result.recordset, 'All quizes fetched.');
        } else {
            return successMessage(res, 'No quiz entry found.');
        };
    } catch (error) {
        return sendServerError(res, error.message);
    };
};

export const fetchQuizQuestionByQuizidController = async (req, res) => {
    try {
        const result = await fetchQuizQuestionByQuizidService(req.params);

        if (result.recordset && result.recordset.length > 0) {
            return dataFound(res, result.recordset, 'All quizes fetched.');
        } else {
            return successMessage(res, 'No quiz entry found.');
        };
    } catch (error) {
        return sendServerError(res, error.message);
    }
};

export const fetchQuizUserDetailsController = async (req, res) => {
    try {
        const result = await fetchQuizUserDetailsService();

        if (result.recordset && result.recordset.length > 0) {
            return dataFound(res, result.recordset, 'All quizes fetched.');
        } else {
            return successMessage(res, 'No quiz entry found.');
        };
    } catch (error) {
        return sendServerError(res, error.message);
    };
};

export const updateQuizController = async (req, res) => {

    try {
        const params = { quizId: req.params.quizId, ...req.body };

        const quiz = await fetchQuizService();

        const userOwned = quiz && quiz.recordset && quiz.recordset.some(question => question.userId === params.userId);

        if (!userOwned) {
            return sendServerError(res, 'You are not allowed to edit this quiz entry.');
        };

        const quizFieldExists = quiz && quiz.recordset && quiz.recordset.some(question => question.quizId === params.quizId);

        if (quizFieldExists) {
            const quizFieldUnchanged = quiz && quiz.recordset && quiz.recordset.some(question => question.quizId === params.quizId && question.userId === params.userId);

            if (quizFieldUnchanged) {
                return successMessage(res, 'The update fields have the same fields as the current update.');
            };

            const response = await updateQuizService(params);

            if (response.rowsAffected && response.rowsAffected > 0) {
                return successMessage(res, 'Quiz updated successfully.');
            } else {
                return sendServerError(res, 'There was a problem while updating quiz entry.');
            };
        } else {
            return sendServerError(res, 'The quiz entry either does not exist.');
        };

    } catch (error) {

        return sendServerError(res, error.message);
    };
};

export const deleteQuizController = async (req, res) => {

    try {
        const available_entry = await fetchQuizService(req.params);
        if (available_entry.rowsAffected && available_entry.rowsAffected > 0) {
            const result = await deleteQuizService(req.params);

            if (result.rowsAffected && result.rowsAffected > 0) {
                return successMessage(res, 'Quiz deleted successfully.');
            };

            return sendServerError(res, 'There was a problem while deleting the quiz. Please retry.');
        } else {
            return sendServerError(res, 'This quiz entry does not exist in the records.');
        };
    } catch (error) {
        return sendServerError(res, error.message);
    };
};