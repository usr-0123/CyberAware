import { v4 } from "uuid"
import { dataFound, sendCreated, sendNotFound, sendServerError, successMessage } from "../helpers/helperFunctions.js";
import { createCategoryService, deleteCategoryService, fetchAllCategories, updateCategoryService } from "../services/categoryService.js";

export const createCategoryController = async (req, res) => {

    try {
        const { categoryName, categoryDescription } = req.body;

        if (!categoryName && !categoryDescription) {
            return sendServerError(res, 'Category name and category description are required.');
        };

        const categories = await fetchAllCategories();

        const categoryExists = categories.recordset.filter(category => category.categoryName === categoryName);

        if (categoryExists.length > 0) {
            return sendServerError(res, 'Category name already existing.');
        } else {

            const categoryId = v4();

            const newCategory = { categoryId, categoryName, categoryDescription };

            const result = await createCategoryService(newCategory);

            if (result.rowsAffected[0] > 0) {
                return sendCreated(res, 'Category created successfully.');
            } else {
                return sendServerError(res, 'A problem occured. Please try again.');
            };
        };

    } catch (error) {
        return error;
    };
};

export const fetchAllCategoriesControllers = async (req, res) => {
    try {
        const result = await fetchAllCategories();
        if (result.rowsAffected > 0) {
            return dataFound(res, result.recordset, 'All categories fetched.');
        } else {
            return successMessage(res, 'No category entry found.');
        }

    } catch (error) {
        return sendServerError(res, error);
    };
};

export const fetchAllCategoriesByIdControllers = async (req, res) => {
    const params = { categoryId: req.params.categoryId };

    try {
        const result = await fetchAllCategories(params);
        if (result.rowsAffected > 0) {
            return dataFound(res, result.recordset, 'All categories fetched.');
        } else {
            return sendNotFound(res, 'No category entry found.');
        }

    } catch (error) {
        return sendServerError(res, error);
    };
};

export const updateCategoryController = async (req, res) => {
    
    try {
        const { categoryName } = req.body;
        
        const params = { categoryId: req.params.categoryId, ...req.body };
        
        const result = await fetchAllCategories(params);
        
        if (result.recordset.length > 0) {
            const categoryNameExists = result.recordset.filter(category => category.categoryName === categoryName);

            
            if (categoryNameExists?.length > 0) {
                return sendServerError(res, 'Category name already exists with this category name update.');
            };
            
            const response = await updateCategoryService(params);

            if (response.rowsAffected[0] > 0) {
                return successMessage(res, 'Category updated successfully.');
            } else {
                return sendServerError(res, 'There was a problem while updating category entry.');
            };

        } else {
            return sendServerError(res, "Category entry doesn't exist.");
        };

    } catch (error) {
        return sendServerError(res, error);
    }

};

export const deleteCategoryController = async (req, res) => {

    const params = { categoryId: req.params.categoryId };

    const available_entry = await fetchAllCategories(params);

    if (available_entry.rowsAffected[0] > 0) {
        try {
            const result = await deleteCategoryService(params);
            if (result.rowsAffected[0] > 0) {
                return successMessage(res, 'Category deleted successfully.');
            };

            return sendServerError(res, 'There was a problem while deleting category entry. Please retry.');
        } catch (error) {
            return sendServerError(res, 'There was a problem while deleting category entry. Please retry.');
        }
    } else {
        return sendServerError(res, 'This category entry does not exist in the records.');
    };

};