import { Carousel, Modal } from "antd";
import { useEffect, useState } from "react";
import { useGetAllCategoriesQuery } from "../../../../services/categoriesApi";
import UserQuizForm from "./UserQuizForm";

const customStyle = {
    border: '1px solid #ddd',
    margin: '10px',
    padding: '20px',
    backgroundColor: '#000',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    textAlign: 'center',
}

const UserNewQuiz = () => {
    const [arraydata, setArrayData] = useState();
    const { data } = useGetAllCategoriesQuery();
    const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
    const [selectedCategoryObject, setSelectedCategoryObject] = useState(null);

    useEffect(() => {
        if (data?.data) {
            setArrayData(data.data)
        } else {
            setArrayData([])
        }
    }, [data]);

    const handleSelect = (params) => {
        setSelectedCategoryObject(params)
        setIsQuizModalOpen(true)
    };

    return (
        <>
            <h1>
                New Quiz
            </h1>
            <Carousel arrows autoplay easing="linear" infinite={true}>
                {arraydata?.map((item, index) => (
                    <div
                        style={customStyle}
                        onClick={() => handleSelect(item)}
                        key={index}
                    >
                        <h3>{item.categoryName}</h3>
                        <p>{item.categoryDescription}</p>
                    </div>
                ))}
            </Carousel>
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