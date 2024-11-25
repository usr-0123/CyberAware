import { useState, useEffect } from "react";
// import { fetchRecommendations } from "../../../../service/algorithmService";
import { Collapse, List } from "antd";

const { Panel } = Collapse;

const UserStatistics = ({ params }) => {
    const [recommendations, setRecommendations] = useState([]);

    // useEffect(() => {
    //     const getRecommendations = async () => {
    //         try {
    //             const recommendationsResponse = await fetchRecommendations(params);
    //             setRecommendations(recommendationsResponse);
    //         } catch (error) {
    //             console.error("Failed to fetch recommendations:", error);
    //         }
    //     };

    //     getRecommendations();
    // }, [params]);

    return (
        <>
            <p>Tailored Recommendations</p>
            <Collapse accordion>
                {recommendations.map((item) => (
                    <Panel header={item.categoryName} key={item.questionId}>
                        <p><strong>Response:</strong> {item.response}</p>
                        <p><strong>Weakness:</strong> {item.weakness}</p>
                        <p><strong>Recommendations:</strong></p>
                        <List
                            dataSource={item.recommendations}
                            renderItem={recommendation => (
                                <List.Item>
                                    <strong>Recommendation:</strong> {recommendation.recommendation} <br />
                                    <strong>Action:</strong> {recommendation.action}
                                </List.Item>
                            )}
                        />
                    </Panel>
                ))}
            </Collapse>
        </>
    );
};

export default UserStatistics;