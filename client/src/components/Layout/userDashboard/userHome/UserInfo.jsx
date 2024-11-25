import { Collapse } from 'antd';

const { Panel } = Collapse;

const UserInfo = ({ useThreats }) => {

    return (
        <>
            <p> User quiz response</p>
            <Collapse accordion>
                {useThreats?.map((item) => (
                    <Panel header={item.categoryName} key={item.questionId}>
                        <p><strong>Question:</strong> {item.questionText || ''}</p>
                        <p><strong>Response:</strong> {item.response || 'Not responded to.'}</p>
                        <p><strong>Threats:</strong> {item.possible_threat || 'Unable to fetch possible threats.'}</p>
                        <p><strong>Recommendation:</strong> {item.recommendation || 'Unable to fetch recommendations.'}</p>
                    </Panel>
                ))}
            </Collapse>
        </>
    )
};

export default UserInfo;