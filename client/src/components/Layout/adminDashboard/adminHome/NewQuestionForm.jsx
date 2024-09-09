import { Button, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { alertService } from "../../../../service/alertService";
import { useGetAllCategoriesQuery } from "../../../../features/api/categoriesApi";
import { useCreateNewQuestionMutation } from "../../../../features/api/questionsApi";

const { showAlert } = alertService();

const NewQuestionForm = ({ setIsNewQuestionModalOpen }) => {
    const [categories, setCategories] = useState([]);
    const { data } = useGetAllCategoriesQuery();
    const [create] = useCreateNewQuestionMutation();

    const onFinish = async (values) => {
        const response = await create(values);

        if (response?.data) {
            showAlert('Success', response.data.Message, 'success', 3);
            setIsNewQuestionModalOpen(false);
        } else {
            showAlert('Error', response.error.data.Message, 'error', 3);
        };
    };

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
                rules={[
                    {
                        required: true,
                        message: 'Please enter the question weight.'
                    },
                ]}
            >
                <Input inputMode="number" max={100} min={0} />
            </Form.Item>

            <Form.Item
                name="questionCategoryId"
                label="Question category"
                rules={[
                    {
                        required: true,
                        message: 'Please choose question category.'
                    },
                ]}
            >
                <Select defaultValue="Category" >
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
                rules={[
                    {
                        required: true,
                        message: 'Please enter the new question.'
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" >Submit</Button>
            </Form.Item>

        </Form>
    );
};

export default NewQuestionForm;