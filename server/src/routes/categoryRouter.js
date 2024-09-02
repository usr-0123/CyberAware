import { Router } from "express";
import { verifyTokenMiddleware } from "../middlewares/userAuthMiddleware.js";
import { createCategoryController, deleteCategoryController, fetchAllCategoriesByIdControllers, fetchAllCategoriesControllers, updateCategoryController } from "../controller/categoryControllers.js";

const categoryRouter = Router();

categoryRouter.post('/category/create', verifyTokenMiddleware, createCategoryController);
categoryRouter.get('/category/all', verifyTokenMiddleware, fetchAllCategoriesControllers);
categoryRouter.get('/category/:categoryId', verifyTokenMiddleware, fetchAllCategoriesByIdControllers);
categoryRouter.patch('/category/update/:categoryId', verifyTokenMiddleware, updateCategoryController);
categoryRouter.delete('/category/delete/:categoryId', verifyTokenMiddleware, deleteCategoryController);

export default categoryRouter;