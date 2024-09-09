import { Collapse } from "antd";

const { Panel } = Collapse;

import data from '../../.json';

const UserFAQs = () => {

    const collapseItems = data.body?.filter(object => object.title === "FAQ Section")[0].Content.map((item, index) => ({
        key: String(index + 1),
        label: item.question,
        children: item.answer
    }));

    return (
        <>
            <h1>FAQs</h1>
            <Collapse>
                {collapseItems?.map((item) => (
                    <Panel header={item.label} key={item.key}>
                        {item.children}
                    </Panel>
                ))}
            </Collapse>
        </>
    );
};

export default UserFAQs;