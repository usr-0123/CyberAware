import { Router } from "express";
import { verifyTokenMiddleware } from "../middlewares/userAuthMiddleware.js";
import { createNewQuestionController, deleteQuestionController, fetchAllQuestionsController, fetchQuestionByIdController, updateQuestionController } from "../controller/questionsControllers.js";

const questionRouter = Router();

questionRouter.post('/question/create', verifyTokenMiddleware, createNewQuestionController);
questionRouter.get('/question/all', verifyTokenMiddleware, fetchAllQuestionsController);
questionRouter.get('/question/:questionId', verifyTokenMiddleware, fetchQuestionByIdController);
questionRouter.patch('/question/update/:questionId', verifyTokenMiddleware, updateQuestionController);
questionRouter.delete('/question/delete/:questionId', verifyTokenMiddleware, deleteQuestionController);

export default questionRouter;