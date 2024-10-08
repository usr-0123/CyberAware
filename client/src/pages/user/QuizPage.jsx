import { Tabs } from "antd";
import UserNewQuiz from "../../components/Layout/userDashboard/userNewQuiz/userNewQuiz";
import QuizResponses from "../../components/Layout/userDashboard/userNewQuiz/QuizResponses";

const tabItems = [
    {
        key: 'newQuiz',
        label: 'New Quiz',
        children: <UserNewQuiz />
    }, {
        key: 'quizResponses',
        label: 'Quiz Responses',
        children: <QuizResponses />
    }
]

const QuizPage = () => {
    return (
        <>
            <h1>QuizPage</h1>
            <Tabs defaultActiveKey="userHomeInfo" items={tabItems} />
        </>
    )
};

export default QuizPage;