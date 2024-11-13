import { Card, Modal } from "antd";
import { useEffect, useState } from "react";
import UserQuizForm from "./UserQuizForm";
import { useGetAllCategoriesQuery } from "../../../../features/api/categoriesApi";
import { EditOutlined } from '@ant-design/icons';
import questionsData from '../../../../questions.json';

const { Meta } = Card;

console.log(questionsData);

const UserNewQuiz = () => {
    const [arraydata, setArrayData] = useState();
    // const { data, refetch: refetchCategories } = useGetAllCategoriesQuery();
    const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
    const [selectedCategoryObject, setSelectedCategoryObject] = useState(null);

    // useEffect(() => {
    //     if (data?.data) {
    //         setArrayData(data.data)
    //     } else {
    //         setArrayData([]);
    //         refetchCategories();
    //     };
    // }, [data, refetchCategories]);

    useEffect(() => {
        if (questionsData) {
            setArrayData(questionsData)
        } else {
            setArrayData([]);
        };
    }, [questionsData]);

    const handleSelect = (params) => {
        setSelectedCategoryObject(params)
        setIsQuizModalOpen(true)
    };

    console.log(arraydata);

    return (
        <>
            <h1>
                New Quiz
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {arraydata?.keys(arraydata).map((category) => (
                    <Card
                        onClick={() => handleSelect(category)}
                        style={{ width: '30%', margin: '1%' }}
                        key={category}
                        actions={[
                            <EditOutlined key="doQuiz" />
                        ]}
                    >
                        <Meta
                            title={category}
                            // description={item.categoryDescription}
                        />
                    </Card>
                ))}
            </div>
            <Modal
                title="Personality quiz test"
                centered
                open={isQuizModalOpen}
                onOk={() => setIsQuizModalOpen(false)}
                onCancel={() => setIsQuizModalOpen(false)}
                width={600}
                footer={true}
            >
                <UserQuizForm selectedCategoryObject={selectedCategoryObject} />
            </Modal>
        </>
    )
};

export default UserNewQuiz;