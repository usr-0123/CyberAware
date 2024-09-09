import { Button, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { alertService } from "../../../../service/alertService";
import { useGetAllCategoriesQuery } from "../../../../features/api/categoriesApi";
import { useUpdateQuestionMutation } from "../../../../features/api/questionsApi";

const { showAlert } = alertService();

const EditQuestionForm = ({ questionId, allData, setIsModalOpen }) => {

    const [categories, setCategories] = useState([]);
    const { data } = useGetAllCategoriesQuery();
    const [edt, { isLoading: isLoading }] = useUpdateQuestionMutation()
    const [questionObject, setQuestionObject] = useState({});

    const onFinish = async (values) => {

        if (values && !values.questionWeight && !values.questionCategoryId && !values.questionText) {
            showAlert('Error', 'Please change atleast one field to make the update', 'error', 3);
            return;
        };

        const editedValues = {
            ...(values.questionWeight && values.questionWeight != '' && { questionWeight: values.questionWeight }),
            ...(values.questionCategoryId && { questionCategoryId: values.questionCategoryId }),
            ...(values.questionText && values.questionText != '' && { questionText: values.questionText })
        };

        try {
            if (questionId) {
                const response = await edt({ questionId, editedValues });

                if (response?.data) {
                    showAlert('Success', response.data.Message, 'success', 3);
                    setIsModalOpen(false);
                } else {
                    showAlert('Error', response.error.data.Message, 'error', 3);
                };

            } else {
                showAlert('Error', 'No question selected to be edited', 'error', 3);
            }

        } catch (error) {
            showAlert('Error', 'error.message', 'error', 3);
        };

    };

    useEffect(() => {
        if (allData) {
            const filteredDataObject = allData.filter(object => object.questionId === questionId);
            if (filteredDataObject.length > 0) {
                setQuestionObject(filteredDataObject[0]);
            } else {
                setQuestionObject({});
            }
        }
    }, [questionId, allData]);

    useEffect(() => {
        if (data?.data) {
            setCategories(data.data)
        } else {
            setCategories([])
        }
    }, [data]);

    return (
        <Form
            name="newQuestionForm"
            onFinish={onFinish}
        >
            <Form.Item
                name="questionWeight"
                label="Question Weight"
            >
                <Input inputMode="number" max={100} min={0} placeholder={questionObject?.questionWeight} />
            </Form.Item>

            <Form.Item
                name="questionCategoryId"
                label="Question category"
            >
                <Select defaultValue={"Category Name"} >
                    {categories.map((category) => (
                        <Select.Option key={category.categoryID} value={category.categoryID}>
                            {category.categoryName}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item
                name="questionText"
                label="Question Text"
            >
                <Input placeholder={questionObject?.questionText} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" key="saveEdit" loading={isLoading} >Save Changes</Button>
            </Form.Item>

        </Form>
    );
};

export default EditQuestionForm;