const reversedResponses = {
    "strongly_agree": "strongly_disagree",
    "agree": "disagree",
    "neutral": "neutral",
    "disagree": "agree",
    "strongly_disagree": "strongly_agree"
};

// Map of weaknesses to threats
const weaknessesToThreats = {
    "Prone to stress, anxiety, and difficulty managing emotions.": [
        "Potential burnout under pressure",
        "Difficulty in maintaining focus during critical tasks",
        "Challenges in emotional regulation during stressful situations"
    ],
    "May struggle with teamwork, communication, or empathy.": [
        "Conflict with colleagues in team settings",
        "Challenges in building strong professional relationships",
        "Potential miscommunications leading to project delays"
    ],
    "May have difficulties in collaborative work and social engagement.": [
        "Struggles in networking opportunities",
        "Limited growth in roles requiring interpersonal interaction",
        "Difficulty in leadership or customer-facing positions"
    ],
    "Could face issues with organization, time management, and dependability.": [
        "Missed deadlines and project delays",
        "Overlooked details leading to errors",
        "Reduced trust from colleagues or supervisors"
    ],
    "May struggle with creativity, problem-solving, and adapting to new situations.": [
        "Stagnation in innovation-driven environments",
        "Difficulty in responding to unexpected challenges",
        "Limited adaptability in fast-paced industries"
    ]
};

// Map of weaknesses to recommendations
const weaknessesToRecommendations = {
    "Prone to stress, anxiety, and difficulty managing emotions.": [
        "Practice regular mindfulness or meditation to manage stress.",
        "Engage in physical activities to release tension and improve mood.",
        "Seek professional counseling or therapy if needed."
    ],
    "May struggle with teamwork, communication, or empathy.": [
        "Participate in team-building activities to improve collaboration.",
        "Work on active listening and communication skills.",
        "Try to understand and appreciate different perspectives in a team."
    ],
    "May have difficulties in collaborative work and social engagement.": [
        "Join social or professional groups to enhance networking skills.",
        "Engage in group projects to practice collaboration.",
        "Seek feedback on social interactions to improve over time."
    ],
    "Could face issues with organization, time management, and dependability.": [
        "Use tools like planners or apps to manage tasks and deadlines.",
        "Break down large tasks into smaller, manageable steps.",
        "Prioritize tasks based on importance and urgency."
    ],
    "May struggle with creativity, problem-solving, and adapting to new situations.": [
        "Engage in creative hobbies or activities to stimulate innovation.",
        "Challenge yourself with puzzles or problem-solving games.",
        "Be open to new experiences and learn from them."
    ]
};

export const analyzeResponses = (questions, responses) => {
    const report = [];

    responses.forEach(response => {
        const question = questions.find(q => q.questionId === response.questionId);
        if (!question) return;

        const { questionText, categoryName } = question;

        const isReversed = questionText.includes("(Reversed)");
        const expectedResponse = isReversed ? reversedResponses[response.response] : response.response;

        let weakness = "";

        switch (categoryName) {
            case "Neuroticism":
                if (["strongly_agree", "agree"].includes(expectedResponse)) {
                    weakness = "Prone to stress, anxiety, and difficulty managing emotions.";
                }
                break;
            case "Agreeableness":
                if (["strongly_disagree", "disagree"].includes(expectedResponse)) {
                    weakness = "May struggle with teamwork, communication, or empathy.";
                }
                break;
            case "Extraversion":
                if (["strongly_disagree", "disagree"].includes(expectedResponse)) {
                    weakness = "May have difficulties in collaborative work and social engagement.";
                }
                break;
            case "Conscientiousness":
                if (["strongly_disagree", "disagree"].includes(expectedResponse)) {
                    weakness = "Could face issues with organization, time management, and dependability.";
                }
                break;
            case "Openness to Experience":
                if (["strongly_disagree", "disagree"].includes(expectedResponse)) {
                    weakness = "May struggle with creativity, problem-solving, and adapting to new situations.";
                }
                break;

            default:
                break;
        }

        if (weakness) {
            const threats = weaknessesToThreats[weakness] || ["No specific threats identified."];
            const recommendations = weaknessesToRecommendations[weakness] || ["No specific recommendations available."];
            report.push({
                questionId: response.questionId,
                response: response.response,
                categoryName,
                weakness,
                threats,
                recommendations
            });
        }
    });

    const filterUnique = (data) => {
        const uniqueItems = [];
        const seen = new Set();

        data.forEach(item => {
            const key = `${item.categoryName}-${item.weakness}`;
            if (!seen.has(key)) {
                seen.add(key);
                uniqueItems.push(item);
            }
        });

        return uniqueItems;
    };

    const filteredData = filterUnique(report);

    return filteredData;
};