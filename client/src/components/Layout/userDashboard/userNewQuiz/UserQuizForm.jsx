import { Button, Collapse, Radio } from "antd";
import { useEffect, useState } from "react";
import { decodeToken } from "../../../../helpers/token";
import { alertService } from "../../../../service/alertService";
import { useGetQuestionCategoryByQuestionIdQuery } from "../../../../features/api/questionsApi";
import { useCreateNewQuizMutation } from "../../../../features/api/quizApi";

const { Panel } = Collapse;

const { showAlert } = alertService();

const UserQuizForm = ({ selectedCategoryObject }) => {
    const [selectedValues, setSelectedValues] = useState();
    const [arrayData, setArrayData] = useState([]);
    const { data, refetch } = useGetQuestionCategoryByQuestionIdQuery({categoryID:selectedCategoryObject.categoryID});
    const [quiz, { isLoading: createQuestionLoading }] = useCreateNewQuizMutation();
    
    const handleRadioChange = (questionId, e) => {
        setSelectedValues((prev) => {
            const responses = Array.isArray(prev) ? prev : [];

            const updatedResponses = responses.filter(
                (response) => response.questionId !== questionId
            );

            updatedResponses.push({
                questionId,
                answer: e.target.value,
            });

            return updatedResponses;
        });
    };

    const handleSubmit = async () => {
        if (!selectedValues || selectedValues.length === 0) {
            showAlert('Error saving details', 'Please select at least one response to continue.', 'error');
            return;
        }

        const user = await decodeToken();
        const quizDate = new Date().toISOString();

        let failedResponses = [];
        let errorMessage = [];
        let successCount = 0;
        let errorCount = 0;

        await Promise.all(
            selectedValues.map(async (response) => {
                const responseObject = {
                    userId: user.userID,
                    questionId: response.questionId,
                    response: response.answer,
                    quizDate: quizDate,
                };

                try {
                    const res = await quiz(responseObject);

                    if (res?.data?.Message) {
                        successCount++;
                    } else {
                        errorCount++;
                        failedResponses.push(response);

                        if (res.error) {
                            errorMessage.push(res.error.data.Message);
                        }
                    }
                } catch (error) {
                    errorCount++;
                    failedResponses.push(response);
                }
            })
        );

        setSelectedValues(failedResponses);

        if (successCount > 0 && errorCount === 0) {
            showAlert('Success', `${successCount}/${selectedValues.length} quiz responses saved successfully.`, 'success');
        } else if (successCount > 0 && errorCount > 0) {
            showAlert('Partial Success', `${successCount}/${selectedValues.length} quiz responses saved successfully. ${errorCount} failed. Please try to resubmit the responses that are still active.`, 'warning');
        } else {
            showAlert('Error', errorMessage.length > 0 ? errorMessage[0] : `All responses failed to save. Please try again.`, 'error');
        }
    };

    const options = [
        { label: 'Strongly Disagree', value: 'strongly_disagree' },
        { label: 'Disagree', value: 'disagree' },
        { label: 'Neutral', value: 'neutral' },
        { label: 'Agree', value: 'agree' },
        { label: 'Strongly Agree', value: 'strongly_agree' },
    ];

    useEffect(() => {
        if (data?.data) {
            const filteredData = data?.data.filter(object => object.categoryName === selectedCategoryObject.categoryName)

            if (filteredData && filteredData.length > 0) {
                setArrayData(filteredData);
            } else {
                setArrayData([]);
                refetch();
            };

        } else {
            setArrayData([]);
            refetch();
        }
    }, [data]);

    return (
        <>
            {selectedCategoryObject && <>
                <p style={{ color: '#666' }}>Test category: {selectedCategoryObject.categoryName}</p>
                <p style={{ color: '#666' }}>Description: {selectedCategoryObject.categoryDescription}</p>
            </>}
            <Collapse style={{ maxHeight: '300px', overflow: 'auto' }}>
                {arrayData?.map((item, index) => (
                    <Panel header={item.questionText} key={item.questionId}>

                        <div
                            key={index}
                        >
                            <Radio.Group
                                onChange={(e) => handleRadioChange(item.questionId, e)}
                                value={selectedValues?.find((response) => response.questionId === item.questionId)?.answer}
                                options={options}
                                optionType="button"
                                buttonStyle="solid"
                            />
                        </div>
                    </Panel>
                ))}
            </Collapse>
            <Button style={{ margin: '10px' }} disabled={!selectedValues?.length > 0} loading={createQuestionLoading} onClick={handleSubmit} type="primary">Submit</Button>
            {selectedValues?.length > 0 &&
                <Button
                    style={{ margin: '10px' }}
                    disabled={!selectedValues?.length > 0}
                    onClick={() => setSelectedValues([])}
                    type="primary"
                >
                    {selectedValues?.length > 1 ? "Clear responses" : "Clear response"}
                </Button>
            }
        </>
    )
};

export default UserQuizForm;