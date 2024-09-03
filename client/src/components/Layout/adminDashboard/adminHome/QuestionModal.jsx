import { useEffect, useState } from "react";

const QuestionModal = ({ selectedQId, data }) => {
[]    
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
        <>
            <p><strong>Created Date:</strong> {questionObject.createdDate || "N/A"}</p>
            <p><strong>Question Text:</strong> {questionObject.questionText || "N/A"}</p>
            <p><strong>Category Name:</strong> {questionObject.categoryName || "N/A"}</p>
        </>
    );
};

export default QuestionModal;