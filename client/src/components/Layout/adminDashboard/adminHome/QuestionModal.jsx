import { useEffect, useState } from "react";
import EditQuestionForm from "./EditQuestionForm";

const QuestionModal = ({ selectedQId, setIsModalOpen, data, edit }) => {
    const [questionObject, setQuestionObject] = useState({});

    useEffect(() => {
        if (data) {
            const filteredDataObject = data.filter(object => object.questionId === selectedQId);
            if (filteredDataObject.length > 0) {
                setQuestionObject(filteredDataObject[0]);
            } else {
                setQuestionObject({});
            }
        }
    }, [selectedQId, data]);

    return (
        edit ? < EditQuestionForm questionId={selectedQId} allData={data} setIsModalOpen={setIsModalOpen} /> :
            <>
                <p><strong>Created Date:</strong> {questionObject.createdDate || "N/A"}</p>
                <p><strong>Question Text:</strong> {questionObject.questionText || "N/A"}</p>
                <p><strong>Category Name:</strong> {questionObject.categoryName || "N/A"}</p>
            </>
    );
};

export default QuestionModal;