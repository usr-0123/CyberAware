import { createNewCategoryQuery, deleteCategoryEntryQuery, fetchAllCategoriesQuery, updateCategoryQuery } from "../queries/categoryQuery.js"
import { poolrequest, sql } from "../utils/dbConnect.js"

export const createCategoryService = async (newcategory) => {
    try {

        const result = await poolrequest()
            .input('categoryID', sql.VarChar, newcategory.categoryId)
            .input('categoryName', sql.VarChar, newcategory.categoryName)
            .input('categoryDescription', sql.VarChar, newcategory.categoryDescription)
            .query(createNewCategoryQuery);

        return result;

    } catch (error) {
        return error
    };
};

export const fetchAllCategories = async (params) => {
    let query;

    if (!params) {
        query = fetchAllCategoriesQuery;
    } else {
        if (params.categoryId) {
            query = fetchAllCategoriesQuery + ` WHERE categoryID = '${params.categoryId}'`;
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

export const updateCategoryService = async (params) => {
    if (!params.categoryName && !params.categoryId && !params.categoryDescription) {
        return { errorMessage: 'Please provide the required fields.' };
    };

    let query = updateCategoryQuery;

    if (params.categoryName) {
        query = query + `categoryName = '${params.categoryName}' WHERE categoryID = '${params.categoryId}'`;
    };

    if (params.categoryDescription) {
        query = query + `categoryDescription = '${params.categoryDescription}' WHERE categoryID = '${params.categoryId}'`;
    };

    try {
        const result = await poolrequest().query(query);
        return result;
    } catch (error) {
        return error;
    };
};

export const deleteCategoryService = async (params) => {
    let query = deleteCategoryEntryQuery + `'${params.categoryId}'`;

    try {
        const result = await poolrequest().query(query);
        return result;
    } catch (error) {
        return error;
    };
};