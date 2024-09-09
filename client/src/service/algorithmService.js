export const threats = (userQuizes, questionCategories) => {
    const userTraits = calculateTraits(userQuizes, questionCategories);
    const userThreats = assessThreats(userTraits);

    return { userTraits, userThreats };
};

const scoring = {
    "strongly agree": 5,
    "agree": 4,
    "neutral": 3,
    "disagree": 2,
    "strongly disagree": 1
};

const calculateTraits = (quizResponses, questions) => {

    let traits = {};

    quizResponses?.forEach(response => {
        const question = questions.find(q => q.questionId === response.questionId);
        if (question) {
            let score = scoring[response.response.toLowerCase()] || 3;
            if (question.questionText.includes("(Reversed)")) {
                score = 6 - score;
            };

            if (!traits[question.categoryName]) {
                traits[question.categoryName] = 0;
            };

            traits[question.categoryName] += score;
        };
    });

    return traits;
};

const assessThreats = (traits) => {
    let threats = [];

    if (traits["Agreeableness"] && traits["Agreeableness"] < 10) {
        threats.push("Potential conflict or non-cooperation with team members.");
    }
    if (traits["Neuroticism"] && traits["Neuroticism"] > 15) {
        threats.push("Susceptibility to stress or social engineering attacks.");
    }
    if (traits["Conscientiousness"] && traits["Conscientiousness"] < 10) {
        threats.push("Risk of careless behavior or failure to follow security protocols.");
    }

    return threats;
};
