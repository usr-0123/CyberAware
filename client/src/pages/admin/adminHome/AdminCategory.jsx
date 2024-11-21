import { Button, Form, Input, Modal, Table } from "antd";
import { alertService } from "../../../service/alertService";
import React, { useEffect, useState } from "react";
import { useCreateNewCategoryMutation, useDeleteCategoryMutation, useGetAllCategoriesQuery, useUpdateCategoryMutation  } from "../../../features/api/categoriesApi";

const { showAlert } = alertService();

const AdminCategory = () => {
    const [categoryForm, setCategoryForm] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoryObject, setCategoryObject] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [newCategory, { isLoading: creatingCategory }] = useCreateNewCategoryMutation();
    const [editCategory, { isLoading: editingCategory }] = useUpdateCategoryMutation();
    const [del, { isLoading: deletingCategory }] = useDeleteCategoryMutation();
    const { data, refetch, isLoading: fetchingCategoriesLoading } = useGetAllCategoriesQuery();
    const [form] = Form.useForm();

    const onFinish = async (params) => {
        if (params) {
            const result = await newCategory(params);

            if (result.data) {
                form.resetFields();
                showAlert('Category created Successfully.', result.data.Message, 'success');
            } else {
                showAlert('Error creating new category.', result.error.data.Message, 'error');
            };
        };
    };

    const onEditFinish = async (params) => {

        if (!params.editCategoryDescription && !params.editCategoryName) {
            setIsEdit(!isEdit);
        };

        let editable = {};

        if (params.editCategoryName) {
            editable.categoryName = params.editCategoryName;
        }

        if (params.editCategoryDescription) {
            editable.categoryDescription = params.editCategoryDescription;
        };

        if (editable) {
            const result = await editCategory({ categoryId: categoryObject.categoryID, editable });

            if (result.data) {
                form.resetFields();
                showAlert('Category updated Successfully.', result.data.Message, 'success');
                setIsModalOpen(false);
            } else {
                showAlert('Error updating category.', result.error.data.Message, 'error');
            };
        };

    };

    const handleSelect = (categoryId) => {
        const categoryObject = categories?.filter(Object => Object.categoryID === categoryId);
        if (categoryObject?.length > 0) {
            setCategoryObject(categoryObject[0]);
        };

        setIsModalOpen(true);
    };

    const handleDelete = async () => {
        if (categoryObject.categoryID) {
            const response = await del(categoryObject.categoryID);
            if (response.error) {
                showAlert('Error', response.error.data.Message, 'error', 3);
                refetch();
            } else {
                showAlert('Success', 'Question deleted successfully', 'success', 3);
                refetch();
            };
        } else {
            showAlert('Error', 'No question selected to be deleted', 'error', 3);
        };

        setIsModalOpen(false);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'categoryName',
            key: 'categoryName'
        }, {
            title: 'categoryDescription',
            dataIndex: 'categoryDescription',
            key: 'categoryDescription'
        }
    ];

    useEffect(() => {
        if (data) {
            setCategories(data.data);
        } else {
            setCategories([]);
            refetch();
        };
    }, [data, refetch]);

    return (
        <>
            <h1>Categories</h1>
            {categoryForm &&
                <Form
                    form={form}
                    name="newCategoryForm"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="categoryName"
                        label="Category Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter the new question.'
                            },
                        ]}
                    >
                        <Input placeholder="Category name" />
                    </Form.Item>

                    <Form.Item
                        name="categoryDescription"
                        label="Category Description"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter the new question.'
                            },
                        ]}
                    >
                        <Input placeholder="Category Description" />
                    </Form.Item>

                    <Form.Item>
                        <Button key="createCategory" type="primary" htmlType="submit" style={{ fontWeight: 'bold' }} loading={creatingCategory} >Submit</Button>
                    </Form.Item>

                </Form>
            }

            {!categoryForm && categories &&
                <Table
                    title={() => 'Assessments Categories'}
                    columns={columns}
                    onRow={(record) => ({
                        onClick: () => handleSelect(record.categoryID)
                    })}
                    rowKey="categoryID"
                    dataSource={categories}
                    bordered
                />
            }

            {categoryObject &&
                <Modal
                    title={`Category name: ${categoryObject.categoryName}`}
                    centered
                    open={isModalOpen}
                    onOk={() => setIsModalOpen(false)}
                    onCancel={() => setIsModalOpen(false)}
                    width={500}
                    footer={[
                        <>
                            <Button key="editCategory" type="primary" style={{ fontWeight: 'bold' }} onClick={() => setIsEdit(!isEdit)} >{isEdit ? "Cancel Edit" : "Edit"}</Button>
                            <Button key="deleteCategory" type="primary" loading={deletingCategory} style={{ fontWeight: 'bold' }} onClick={handleDelete} danger >Delete</Button>
                        </>
                    ]}
                >
                    {!isEdit &&
                        <>
                            <strong>Description</strong>
                            <p>{categoryObject.categoryDescription}</p>
                        </>
                    }
                    {isEdit &&
                        <Form
                            form={form}
                            name="editCategoryForm"
                            onFinish={onEditFinish}
                        >
                            <Form.Item
                                name="editCategoryName"
                                label="Category Name"
                            >
                                <Input placeholder={categoryObject?.categoryName} />
                            </Form.Item>

                            <Form.Item
                                name="editCategoryDescription"
                                label="Category Description"
                            >
                                <Input placeholder={categoryObject?.categoryDescription} />
                            </Form.Item>

                            <Form.Item>
                                <Button key="editCategory" type="primary" htmlType="submit" style={{ fontWeight: 'bold' }} loading={editingCategory} >Submit</Button>
                            </Form.Item>

                        </Form>
                    }
                </Modal>
            }

            <div style={{ margin: '10px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button type="primary" key="addCategory" style={{ minWidth: '20%', fontWeight: 'bold' }} onClick={() => setCategoryForm(!categoryForm)} >{categoryForm ? "Close New Category Form" : "Add New Category"}</Button>
            </div>
        </>
    )
};

export default AdminCategory;