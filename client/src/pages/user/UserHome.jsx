import { Tabs } from "antd";
import UserInfo from "../../components/Layout/userDashboard/userHome/UserInfo";
import UserStatistics from "../../components/Layout/userDashboard/userHome/UserStatistics";

const tabItems = [
    {
        key: 'userHomeInfo',
        label: 'Info',
        children: <UserInfo />
    }, {
        key: 'userStatistics',
        label: 'Personality Statistics',
        children: <UserStatistics />
    }
];

const UserHome = () => {
    return (
        <>
            <Tabs defaultActiveKey="userHomeInfo" items={tabItems} />
        </>
    );
};

export default UserHome;