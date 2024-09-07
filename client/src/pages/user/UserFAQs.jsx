import { Collapse } from "antd";

const { Panel } = Collapse;

import data from '../../.json';
import { useEffect, useState } from "react";

const UserFAQs = () => {
    const [arrayData, setArrayData] = useState([]);

    useEffect(() => {
        if (data && data.body) {
            const faqs = data.body.filter(object => object.title === "FAQ Section")

            if (faqs && faqs.length > 0) {
                setArrayData(faqs[0].Content);
            } else {
                setArrayData([]);
            };
        }
    }, []);

    const collapseItems = arrayData?.map((item, index) => ({
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