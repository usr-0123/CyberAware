import { Collapse } from "antd";
import { useEffect, useState } from "react";

import data from '../../../.json';

const { Panel } = Collapse;

const AdminHomeFAQs = () => {
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
            <h1>Frequently Asked Questions</h1>
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

export default AdminHomeFAQs;