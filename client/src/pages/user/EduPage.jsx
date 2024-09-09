import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

import data from '../../.json';

const EduPage = () => {

    return (
        <>
            <h1>Educational Content</h1>
            {data.intro &&
                <div>
                    <h2>{data.intro[0].heading}</h2>
                    <h3>{data.intro[0].title}</h3>
                    <p>{data.intro[0].info}</p>
                </div>
            }
            {data.body && <Collapse>
                {data.body?.filter(object => object.title != "FAQ Section").map((object, index) => (
                    <Panel style={{ borderBottom: '1px solid #d1d1d1' }}
                        header={
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                {object.title}
                            </div>
                        }
                        key={String(index)}
                    >
                        <h2>{object.Heading}</h2>
                        {object.Content?.map((entry, index) => (
                            entry.resource ?
                                <div key={String(index)}>
                                    <h3>{entry.resource}</h3>
                                    <p>{entry.description}</p>
                                    <a href={entry.link}>{entry.link}</a>
                                </div>
                                :
                                entry.infoHeader ?
                                    <>
                                        <h3>{entry.infoHeader}</h3>
                                        <p>{entry.info}</p>
                                    </> : <></>
                        ))}
                    </Panel>
                ))}
            </Collapse>}
        </>
    )
};

export default EduPage;