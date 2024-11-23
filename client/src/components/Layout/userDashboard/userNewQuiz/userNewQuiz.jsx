import { Card, Modal } from "antd";
import { useEffect, useState } from "react";
import UserQuizForm from "./UserQuizForm";
import { useGetAllCategoriesQuery } from "../../../../features/api/categoriesApi";
import { EditOutlined } from '@ant-design/icons';

const { Meta } = Card;

const UserNewQuiz = () => {
    const [arraydata, setArrayData] = useState();
    const { data, refetch: refetchCategories } = useGetAllCategoriesQuery();
    const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
    const [selectedCategoryObject, setSelectedCategoryObject] = useState(null);

    useEffect(() => {
        if (data?.data) {
            setArrayData(data.data)
        } else {
            setArrayData([]);
            refetchCategories();
        };
    }, [data, refetchCategories]);

    const handleSelect = (params) => {
        
        setSelectedCategoryObject(params)
        setIsQuizModalOpen(true)
    };

    return (
        <>
            <h1>
                Questions Categories
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {arraydata?.map((item, index) => (
                    <Card
                        onClick={() => handleSelect(item)}
                        style={{ width: '30%', margin: '1%' }}
                        key={index}
                        actions={[
                            <EditOutlined key="doQuiz" />
                        ]}
                    >
                        <Meta
                            title={item.categoryName}
                            description={item.categoryDescription}
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