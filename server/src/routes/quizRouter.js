import { Router } from "express";
import { verifyTokenMiddleware } from "../middlewares/userAuthMiddleware.js";
import { createNewQuizController, deleteQuizController, fetchAllQuizController, fetchQuizByIdController, fetchQuizByQuestionIdController, fetchQuizByUserIdController, updateQuizController } from "../controller/quizController.js";

const quizRouter = Router();

quizRouter.post('/quiz/create', verifyTokenMiddleware, createNewQuizController);
quizRouter.get('/quiz/fetch/all', verifyTokenMiddleware, fetchAllQuizController);
quizRouter.get('/quiz/fetch/quizId/:quizId', verifyTokenMiddleware, fetchQuizByIdController);
quizRouter.get('/quiz/fetch/userId/:userId', verifyTokenMiddleware, fetchQuizByUserIdController);
quizRouter.get('/quiz/fetch/questionId/:questionId', verifyTokenMiddleware, fetchQuizByQuestionIdController);
quizRouter.patch('/quiz/update/:quizId', verifyTokenMiddleware, updateQuizController);
quizRouter.delete('/quiz/delete/:quizId', verifyTokenMiddleware, deleteQuizController)

export default quizRouter;