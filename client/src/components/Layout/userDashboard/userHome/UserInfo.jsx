import { Collapse, List } from 'antd';

const { Panel } = Collapse;

const UserInfo = ({ useThreats }) => {

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