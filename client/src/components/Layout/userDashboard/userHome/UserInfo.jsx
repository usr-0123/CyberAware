import { useGetQuizbyUseridQuery } from '../../../../features/api/quizApi';
import { decodeToken } from '../../../../helpers/token';
import { useGetAllQuestionsCategoryQuery } from '../../../../features/api/questionsApi';
import { threats } from '../../../../service/algorithmService';
import { useEffect, useState } from 'react';

const UserInfo = () => {
    const [useThreats, setUseThreats] = useState(null);

    const user = decodeToken();

    const { data: userQuizes, refetch: refetchUserQuizes } = useGetQuizbyUseridQuery(user?.userID);
    const { data: questionCategories, refetch: refetchuestionCategories } = useGetAllQuestionsCategoryQuery();

    useEffect(() => {
        if (userQuizes && questionCategories) {
            const calculateThreats = async () => {
                const result = threats(userQuizes?.data, questionCategories?.data);
                setUseThreats(result);
            };
            calculateThreats();
        };

        refetchUserQuizes();
        refetchuestionCategories();
    }, [userQuizes, questionCategories, refetchUserQuizes, refetchuestionCategories]);

    return (
        <>
            <p> User info</p>
            {/* {useThreats && <p>{useThreats.userTraits}</p> } */}
        </>
    )
};

export default UserInfo;