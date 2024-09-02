export const createNewCategoryQuery = `INSERT INTO tbl_Categories (categoryID, categoryName) VALUES (@categoryID, @categoryName)`;

export const fetchAllCategoriesQuery = `SELECT * FROM tbl_Categories`;

export const updateCategoryQuery = `UPDATE tbl_Categories SET `;

export const deleteCategoryEntryQuery = `DELETE FROM tbl_Categories WHERE categoryID = `;
