import { useGetQuizbyUseridQuery } from '../../../../features/api/quizApi';
import { decodeToken } from '../../../../helpers/token';
import { useGetAllQuestionsCategoryQuery } from '../../../../features/api/questionsApi';
import { analyzeResponses } from '../../../../service/algorithmService';
import { useEffect, useState } from 'react';
import { Collapse, List } from 'antd';

const { Panel } = Collapse;

const UserInfo = () => {
    const [useThreats, setUseThreats] = useState([]);

    const user = decodeToken();

    const { data: userQuizes, refetch: refetchUserQuizes } = useGetQuizbyUseridQuery(user?.userID);
    const { data: questionCategories, refetch: refetchuestionCategories } = useGetAllQuestionsCategoryQuery();

    useEffect(() => {
        if (userQuizes && questionCategories) {
            const calculateThreats = async () => {
                const userReport = analyzeResponses(questionCategories?.data, userQuizes?.data);

                setUseThreats(userReport);
            };
            calculateThreats();
        };

        refetchUserQuizes();
        refetchuestionCategories();
    }, [userQuizes, questionCategories, refetchUserQuizes, refetchuestionCategories]);

    console.log(useThreats);

    return (
        <>
            <p> User info</p>
            <Collapse accordion>
                {useThreats?.map((item) => (
                    <Panel header={item.categoryName} key={item.questionId}>
                        <p><strong>Response:</strong> {item.response}</p>
                        <p><strong>Weakness:</strong> {item.weakness}</p>
                        <p><strong>Threats:</strong></p>
                        <List
                            dataSource={item.threats}
                            renderItem={threat => <List.Item>{threat}</List.Item>}
                        />
                        <p><strong>Recommendations:</strong></p>
                        <List
                            dataSource={item.recommendations}
                            renderItem={recommendation => <List.Item>{recommendation}</List.Item>}
                        />
                    </Panel>
                ))}
            </Collapse>
        </>
    )
};

export default UserInfo;