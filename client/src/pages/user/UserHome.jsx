import { useEffect, useState } from "react";

import { Tabs } from "antd";

import UserInfo from "../../components/Layout/userDashboard/userHome/UserInfo";
import UserStatistics from "../../components/Layout/userDashboard/userHome/UserStatistics";

import { decodeToken } from "../../helpers/token";
import { analyzeResponses } from "../../service/algorithmService";

import { useGetQuizbyUseridQuery } from "../../features/api/quizApi";
import { useGetAllQuestionsCategoryQuery } from "../../features/api/questionsApi";

const UserHome = () => {
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

    const tabItems = [
        {
            key: 'userHomeInfo',
            label: 'Info',
            children: <UserInfo useThreats={useThreats} />
        }, {
            key: 'userStatistics',
            label: 'Personality Statistics',
            children: <UserStatistics params={useThreats} />
        }
    ];

    return (
        <>
            <Tabs defaultActiveKey="userHomeInfo" items={tabItems} />
        </>
    );
};

export default UserHome;