import React, { useEffect, useState } from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

import data from '../../.json';

const EduPage = () => {
    const [arrayData, setArrayData] = useState([]);

    useEffect(() => {
        if (data && data.body) {
            const content = data.body.filter(object => object.title != "FAQ Section")

            if (content && content.length > 0) {
                setArrayData(content);
            } else {
                setArrayData([]);
            };

        }
    }, []);

    return (
        arrayData && <Collapse>
            {arrayData?.map((object, index) => (
                <Panel style={{ borderBottom: '1px solid #d1d1d1' }}
                    header={
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            {object.title}
                        </div>
                    }
                    key={String(index)}
                >
                    <h2>{object.Heading}</h2>
                    {object.Content?.map((entry) => (
                        entry.resource ?
                            <>
                                <h3>{entry.resource}</h3>
                                <p>{entry.description}</p>
                                <a href={entry.link}>{entry.link}</a>
                            </> : entry.infoHeader ?
                                <>
                                    <h3>{entry.infoHeader}</h3>
                                    <p>{entry.info}</p>
                                </> : <></>
                    ))}
                </Panel>
            ))}
        </Collapse>
    )
};

export default EduPage;