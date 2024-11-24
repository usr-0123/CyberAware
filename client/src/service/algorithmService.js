const reversedResponses = {
  strongly_agree: "strongly_disagree",
  agree: "disagree",
  neutral: "neutral",
  disagree: "agree",
  strongly_disagree: "strongly_agree",
};

// Map of weaknesses to threats
const weaknessesToThreats = {
  "Prone to stress, anxiety, and difficulty managing emotions.": [
    "Potential burnout under pressure",
    "Difficulty in maintaining focus during critical tasks",
    "Challenges in emotional regulation during stressful situations",
  ],
  "May struggle with teamwork, communication, or empathy.": [
    "Conflict with colleagues in team settings",
    "Challenges in building strong professional relationships",
    "Potential miscommunications leading to project delays",
  ],
  "May have difficulties in collaborative work and social engagement.": [
    "Struggles in networking opportunities",
    "Limited growth in roles requiring interpersonal interaction",
    "Difficulty in leadership or customer-facing positions",
  ],
  "Could face issues with organization, time management, and dependability.": [
    "Missed deadlines and project delays",
    "Overlooked details leading to errors",
    "Reduced trust from colleagues or supervisors",
  ],
  "May struggle with creativity, problem-solving, and adapting to new situations.":
    [
      "Stagnation in innovation-driven environments",
      "Difficulty in responding to unexpected challenges",
      "Limited adaptability in fast-paced industries",
    ],

  ///////////////
  "Prone to stress, anxiety, and difficulty managing emotions.": [
    "Potential burnout under pressure",
    "Difficulty in maintaining focus during critical tasks",
    "Challenges in emotional regulation during stressful situations",
  ],
  "May struggle with teamwork, communication, or empathy.": [
    "Conflict with colleagues in team settings",
    "Challenges in building strong professional relationships",
    "Potential miscommunications leading to project delays",
  ],
  "May have difficulties in collaborative work and social engagement.": [
    "Struggles in networking opportunities",
    "Limited growth in roles requiring interpersonal interaction",
    "Difficulty in leadership or customer-facing positions",
  ],
  "Could face issues with organization, time management, and dependability.": [
    "Missed deadlines and project delays",
    "Overlooked details leading to errors",
    "Reduced trust from colleagues or supervisors",
  ],
  "May struggle with creativity, problem-solving, and adapting to new situations.":
    [
      "Stagnation in innovation-driven environments",
      "Difficulty in responding to unexpected challenges",
      "Limited adaptability in fast-paced industries",
    ],

  ////////////////////////////////
  // Creating a comprehensive cybersecurity threat assessment questionnaire is a great way to gather insights! Here are some useful questions you could include to cover different threat areas:

  "Awareness and Knowledge": [
    "How would you rate your knowledge of common cybersecurity threats (e.g., phishing, ransomware, malware)?",
    "How often do you actively seek information about new cybersecurity threats?",
  ],

  "Device Security": [
    "Do you use antivirus or anti-malware software on your devices? If yes, how often is it updated?",
    "How often do you update the software and operating systems on your devices?",
    "Do you use secure passwords and two-factor authentication for your accounts?",
  ],

  "Network Security": [
    "Do you use public Wi-Fi networks frequently? If yes, what security measures do you take?",
    "Are you aware of the risks associated with using unsecured or public Wi-Fi networks?",
  ],

  "Phishing and Social Engineering": [
    "Have you ever received a suspicious email or message asking for personal information? How did you respond?",
    "Are you familiar with techniques to identify phishing emails or social engineering attempts?",
  ],
  "Data Protection and Privacy": [
    "How do you protect sensitive personal or work-related information on your devices?",
    "Are you cautious about sharing personal information on social media or online platforms?",
  ],
  "Behavioral Patterns": [
    "How often do you download files or software from unknown sources?",
    "Do you use the same password for multiple accounts?",
    "Have you ever encountered a potential data breach or unauthorized access to one of your accounts?",
  ],
  "Incident Handling": [
    "If you suspect a cybersecurity incident, what steps do you take immediately?",
    "Have you experienced any cybersecurity incidents in the past year? If so, please describe the incident and its impact.",
  ],
  "General Concerns and Precautions": [
    "What types of cybersecurity threats are you most concerned about?",
    "What are some precautions you take to secure your online presence?",
  ],
  // These questions should help you gather meaningful insights on awareness levels, behaviors, and areas where people may be at risk. Let me know if you’d like further assistance with specific threat categories!
};

// Map of weaknesses to recommendations
const weaknessesToRecommendations = {
  "Prone to stress, anxiety, and difficulty managing emotions.": [
    "Practice regular mindfulness or meditation to manage stress.",
    "Engage in physical activities to release tension and improve mood.",
    "Seek professional counseling or therapy if needed.",
  ],
  "May struggle with teamwork, communication, or empathy.": [
    "Participate in team-building activities to improve collaboration.",
    "Work on active listening and communication skills.",
    "Try to understand and appreciate different perspectives in a team.",
  ],
  "May have difficulties in collaborative work and social engagement.": [
    "Join social or professional groups to enhance networking skills.",
    "Engage in group projects to practice collaboration.",
    "Seek feedback on social interactions to improve over time.",
  ],
  "Could face issues with organization, time management, and dependability.": [
    "Use tools like planners or apps to manage tasks and deadlines.",
    "Break down large tasks into smaller, manageable steps.",
    "Prioritize tasks based on importance and urgency.",
  ],
  "May struggle with creativity, problem-solving, and adapting to new situations.":
    [
      "Engage in creative hobbies or activities to stimulate innovation.",
      "Challenge yourself with puzzles or problem-solving games.",
      "Be open to new experiences and learn from them.",
    ],
};

const threatRecommendations = [
  {
    weakness: "Prone to stress, anxiety, and difficulty managing emotions.",
    recommendations: [
      {
        threat: "Potential burnout under pressure",
        recommendation:
          "Practice regular mindfulness or meditation to manage stress.",
        action:
          "Incorporate a daily mindfulness routine or meditation practice. Use apps like Headspace or Calm to guide your sessions.",
      },
      {
        threat: "Difficulty in maintaining focus during critical tasks",
        recommendation:
          "Engage in physical activities to release tension and improve mood.",
        action:
          "Schedule regular exercise, such as walking or yoga, to keep your mind and body in balance. Aim for at least 30 minutes of activity per day.",
      },
      {
        threat:
          "Challenges in emotional regulation during stressful situations",
        recommendation: "Seek professional counseling or therapy if needed.",
        action:
          "If stress becomes overwhelming, consider speaking to a therapist or counselor. They can provide techniques for managing emotions effectively.",
      },
    ],
  },
  {
    weakness: "May struggle with teamwork, communication, or empathy.",
    recommendations: [
      {
        threat: "Conflict with colleagues in team settings",
        recommendation:
          "Participate in team-building activities to improve collaboration.",
        action:
          "Encourage regular team-building exercises and participate actively to strengthen your teamwork skills.",
      },
      {
        threat: "Challenges in building strong professional relationships",
        recommendation: "Work on active listening and communication skills.",
        action:
          "Practice active listening during meetings by summarizing key points and asking clarifying questions. Consider communication workshops for improvement.",
      },
      {
        threat: "Potential miscommunications leading to project delays",
        recommendation:
          "Try to understand and appreciate different perspectives in a team.",
        action:
          "Make a habit of considering others' viewpoints in discussions. Engage in exercises that build empathy and understanding within your team.",
      },
    ],
  },
  {
    weakness:
      "May have difficulties in collaborative work and social engagement.",
    recommendations: [
      {
        threat: "Struggles in networking opportunities",
        recommendation:
          "Join social or professional groups to enhance networking skills.",
        action:
          "Attend networking events or join professional organizations to practice and enhance your networking abilities.",
      },
      {
        threat: "Limited growth in roles requiring interpersonal interaction",
        recommendation: "Engage in group projects to practice collaboration.",
        action:
          "Volunteer for group projects or cross-functional teams at work to gain experience in collaborative settings.",
      },
      {
        threat: "Difficulty in leadership or customer-facing positions",
        recommendation:
          "Seek feedback on social interactions to improve over time.",
        action:
          "Request regular feedback from colleagues or mentors on your social and interpersonal interactions to identify areas for improvement.",
      },
    ],
  },
  {
    weakness:
      "Could face issues with organization, time management, and dependability.",
    recommendations: [
      {
        threat: "Missed deadlines and project delays",
        recommendation:
          "Use tools like planners or apps to manage tasks and deadlines.",
        action:
          "Adopt task management tools like Todoist, Asana, or a simple planner to track deadlines and prioritize tasks.",
      },
      {
        threat: "Overlooked details leading to errors",
        recommendation:
          "Break down large tasks into smaller, manageable steps.",
        action:
          "Decompose larger tasks into smaller, actionable items. Use checklists to ensure all details are covered.",
      },
      {
        threat: "Reduced trust from colleagues or supervisors",
        recommendation: "Prioritize tasks based on importance and urgency.",
        action:
          "Practice prioritization by categorizing tasks using the Eisenhower matrix (urgent vs. important). Review and adjust priorities regularly.",
      },
    ],
  },
  {
    weakness:
      "May struggle with creativity, problem-solving, and adapting to new situations.",
    recommendations: [
      {
        threat: "Stagnation in innovation-driven environments",
        recommendation:
          "Engage in creative hobbies or activities to stimulate innovation.",
        action:
          "Dedicate time to creative pursuits like painting, writing, or playing music. These activities can inspire innovative thinking.",
      },
      {
        threat: "Difficulty in responding to unexpected challenges",
        recommendation:
          "Challenge yourself with puzzles or problem-solving games.",
        action:
          "Integrate problem-solving games or puzzles into your routine to improve your ability to think quickly in challenging situations.",
      },
      {
        threat: "Limited adaptability in fast-paced industries",
        recommendation: "Be open to new experiences and learn from them.",
        action:
          "Proactively seek out new experiences and learning opportunities. Consider taking courses or attending workshops on topics outside your comfort zone.",
      },
    ],
  },
];

export const analyzeResponses = (questions, responses) => {
  // console.log(questions, responses);
  
  const report = [];

  responses.forEach((response) => {
    const question = questions.find(
      (q) => q.questionId === response.questionId
    );
    if (!question) return;

    const { questionText, categoryName } = question;

    const isReversed = questionText.includes("(Reversed)");
    const expectedResponse = isReversed
      ? reversedResponses[response.response]
      : response.response;

    let weakness = "";

    switch (categoryName) {
      case "Neuroticism":
        if (["strongly_agree", "agree"].includes(expectedResponse)) {
          weakness =
            "Prone to stress, anxiety, and difficulty managing emotions.";
        }
        break;
      case "Agreeableness":
        if (["strongly_disagree", "disagree"].includes(expectedResponse)) {
          weakness = "May struggle with teamwork, communication, or empathy.";
        }
        break;
      case "Extraversion":
        if (["strongly_disagree", "disagree"].includes(expectedResponse)) {
          weakness =
            "May have difficulties in collaborative work and social engagement.";
        }
        break;
      case "Conscientiousness":
        if (["strongly_disagree", "disagree"].includes(expectedResponse)) {
          weakness =
            "Could face issues with organization, time management, and dependability.";
        }
        break;
      case "Openness to Experience":
        if (["strongly_disagree", "disagree"].includes(expectedResponse)) {
          weakness =
            "May struggle with creativity, problem-solving, and adapting to new situations.";
        }
        break;

      default:
        break;
    }

    if (weakness) {
      const threats = weaknessesToThreats[weakness] || [
        "No specific threats identified.",
      ];
      const recommendations = weaknessesToRecommendations[weakness] || [
        "No specific recommendations available.",
      ];
      report.push({
        questionId: response.questionId,
        response: response.response,
        categoryName,
        weakness,
        threats,
        recommendations,
      });
    }
  });

  const filterUnique = (data) => {
    const uniqueItems = [];
    const seen = new Set();

    data.forEach((item) => {
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

export function fetchRecommendations(userResponses) {
  return userResponses.map((response) => {
    const matchedWeakness = threatRecommendations.find(
      (item) => item.weakness === response.weakness
    );

    if (!matchedWeakness) {
      return { ...response, recommendations: [] };
    }

    const matchedRecommendations = matchedWeakness.recommendations.filter(
      (rec) => response.threats.includes(rec.threat)
    );

    return {
      questionId: response.questionId,
      response: response.response,
      categoryName: response.categoryName,
      weakness: response.weakness,
      recommendations: matchedRecommendations.map((rec) => ({
        recommendation: rec.recommendation,
        action: rec.action,
      })),
    };
  });
}

const questions_with_options = {
  "Phishing Attacks": [
    {
      question:
        "How often do you verify the sender's email address before clicking on a link?",
      options: ["Always", "Sometimes", "Rarely", "Never"],
    },
    {
      question:
        "When you receive a suspicious link or file in a message, how do you usually respond?",
      options: [
        "Delete without opening",
        "Ask the sender to verify",
        "Open cautiously",
        "Open without much concern",
      ],
    },
    {
      question: "How familiar are you with identifying phishing attacks?",
      options: [
        "Very familiar",
        "Somewhat familiar",
        "Slightly familiar",
        "Not familiar",
      ],
    },
  ],

  Ransomware: [
    {
      question: "Do you regularly back up your important files?",
      options: [
        "Yes, weekly",
        "Yes, monthly",
        "Yes, occasionally",
        "No, never",
      ],
    },
  ],

  "Malware and Viruses": [
    {
      question:
        "How frequently do you run antivirus or anti-malware scans on your devices?",
      options: ["Daily", "Weekly", "Monthly", "Rarely", "Never"],
    },
  ],

  "Social Engineering": [
    {
      question:
        "Have you enabled two-factor authentication on any of your accounts?",
      options: [
        "Yes, on all critical accounts",
        "Yes, on some accounts",
        "No, but I know about it",
        "No, I'm not familiar with it",
      ],
    },
  ],

  "Public Wi-Fi Vulnerabilities": [
    {
      question:
        "Do you use public Wi-Fi for accessing sensitive information (e.g., banking, email)?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you use a VPN when accessing public Wi-Fi?",
      options: ["Always", "Sometimes", "Rarely", "Never"],
    },
  ],

  "Data Breaches and Unauthorized Access": [
    {
      question:
        "How often do you update the passwords for your online accounts?",
      options: [
        "Every 1-3 months",
        "Every 6 months",
        "Once a year",
        "Rarely or never",
      ],
    },
  ],

  "Password Theft and Account Hijacking": [
    {
      question:
        "Do you use a password manager to store and generate unique passwords?",
      options: [
        "Yes, I use a password manager",
        "No, but I use unique passwords",
        "No, I reuse some passwords",
        "No, I reuse passwords frequently",
      ],
    },
  ],

  "Spyware and Keyloggers": [
    {
      question:
        "How cautious are you when downloading software from the internet?",
      options: [
        "I only download from trusted sources",
        "I verify but occasionally take risks",
        "I rarely verify",
        "I often download without checking",
      ],
    },
  ],

  "Unsecured IoT Devices": [
    {
      question:
        "Are your IoT devices (e.g., smart speakers, cameras) secured with strong passwords and updated software?",
      options: [
        "Yes, all are secured",
        "Some are secured",
        "No, but I intend to secure them",
        "No, they are not secured",
      ],
    },
  ],

  "Fake or Malicious Software Downloads": [
    {
      question:
        "How cautious are you when downloading software from the internet?",
      options: [
        "I only download from trusted sources",
        "I verify but occasionally take risks",
        "I rarely verify",
        "I often download without checking",
      ],
    },
  ],

  "Zero-Day Exploits": [
    {
      question:
        "Are your software and applications up to date with the latest security patches?",
      options: [
        "Yes, always",
        "Yes, regularly",
        "I check occasionally",
        "No, never",
      ],
    },
  ],

  "Denial of Service (DoS) or Distributed Denial of Service (DDoS) Attacks": [
    {
      question:
        "Do you have any measures in place to protect your online services or website from DDoS attacks?",
      options: [
        "Yes, I have DDoS protection",
        "I plan to implement DDoS protection",
        "No, I do not have protection",
        "Not sure",
      ],
    },
  ],

  "Identity Theft and Impersonation": [
    {
      question:
        "Do you use identity theft protection services or credit monitoring?",
      options: [
        "Yes, I use them",
        "I plan to use them",
        "No, but I am considering it",
        "No, I do not use them",
      ],
    },
  ],

  "Cloud Security Vulnerabilities": [
    {
      question:
        "Do you store sensitive data in cloud services, and do you ensure proper encryption and access control?",
      options: [
        "Yes, always secure",
        "Yes, but sometimes insecure",
        "No, I avoid cloud storage",
        "I’m not sure how secure it is",
      ],
    },
  ],

  "Mobile Device Threats": [
    {
      question:
        "Do you regularly update the apps and operating system on your mobile device?",
      options: ["Yes, automatically", "Yes, manually", "Sometimes", "Never"],
    },
    {
      question:
        "How often do you check the permissions you grant to mobile apps?",
      options: ["Always", "Sometimes", "Rarely", "Never"],
    },
  ],

  "Physical Theft of Devices": [
    {
      question:
        "Do you have a way to track or remotely wipe your mobile device in case it’s lost or stolen?",
      options: [
        "Yes, I have tracking/wiping enabled",
        "I plan to enable it",
        "No, but I'm aware of it",
        "No, I'm not aware of it",
      ],
    },
  ],
};

const questions_with_categories = {
  "Phishing Attacks": [
    {
      question:
        "How often do you verify the sender's email address before clicking on a link?",
      options: [
        {
          response: "Always",
          possible_threat:
            "Low risk of phishing attacks. Regular verification reduces the likelihood of falling for phishing attempts.",
        },
        {
          response: "Sometimes",
          possible_threat:
            "Moderate risk of phishing. Inconsistent verification may lead to accidental clicks on phishing links.",
        },
        {
          response: "Rarely",
          possible_threat:
            "High risk of phishing. Rarely verifying emails increases the chances of falling for phishing scams.",
        },
        {
          response: "Never",
          possible_threat:
            "Very high risk of phishing. Not verifying email addresses at all significantly exposes you to phishing attacks.",
        },
      ],
    },
    {
      question:
        "When you receive a suspicious link or file in a message, how do you usually respond?",
      options: [
        {
          response: "Delete without opening",
          possible_threat:
            "Low risk of malware, spyware, or phishing. Promptly deleting suspicious links helps mitigate these threats.",
        },
        {
          response: "Ask the sender to verify",
          possible_threat:
            "Moderate risk, but safer than opening. Contacting the sender is a good practice to verify suspicious links.",
        },
        {
          response: "Open cautiously",
          possible_threat:
            "Moderate risk of phishing, malware, or spyware. Opening suspicious files without caution can lead to infection or data theft.",
        },
        {
          response: "Open without much concern",
          possible_threat:
            "High risk of malware, ransomware, or phishing attacks. Ignoring the suspicious nature of links exposes your device and data to serious threats.",
        },
      ],
    },
    {
      question: "How familiar are you with identifying phishing attacks?",
      options: [
        {
          response: "Very familiar",
          possible_threat:
            "Low risk. Strong awareness of phishing techniques significantly reduces the chances of falling victim.",
        },
        {
          response: "Somewhat familiar",
          possible_threat:
            "Moderate risk. Limited knowledge of phishing tactics may lead to falling for more sophisticated attacks.",
        },
        {
          response: "Slightly familiar",
          possible_threat:
            "High risk. Inadequate awareness of phishing could result in missing red flags and falling for phishing attempts.",
        },
        {
          response: "Not familiar",
          possible_threat:
            "Very high risk. Lack of awareness makes you highly vulnerable to phishing attacks.",
        },
      ],
    },
  ],

  Ransomware: [
    {
      question: "Do you regularly back up your important files?",
      options: [
        {
          response: "Yes, weekly",
          possible_threat:
            "Low risk of ransomware. Regular backups ensure that files are recoverable in case of a ransomware attack.",
        },
        {
          response: "Yes, monthly",
          possible_threat:
            "Moderate risk. While regular backups reduce the impact of ransomware, longer gaps between backups increase data loss potential.",
        },
        {
          response: "Yes, occasionally",
          possible_threat:
            "High risk. Infrequent backups may lead to significant data loss if attacked by ransomware.",
        },
        {
          response: "No, never",
          possible_threat:
            "Very high risk. Not backing up files leaves you vulnerable to data loss in the event of a ransomware attack.",
        },
      ],
    },
  ],

  "Malware and Viruses": [
    {
      question:
        "How frequently do you run antivirus or anti-malware scans on your devices?",
      options: [
        {
          response: "Daily",
          possible_threat:
            "Low risk. Regular antivirus scans help prevent malware infections from going undetected.",
        },
        {
          response: "Weekly",
          possible_threat:
            "Low to moderate risk. Weekly scans are effective but may not detect more recent or sophisticated threats.",
        },
        {
          response: "Monthly",
          possible_threat:
            "Moderate risk. Monthly scans are less frequent and may miss malware infections or updates to existing threats.",
        },
        {
          response: "Rarely",
          possible_threat:
            "High risk. Infrequent scans leave your system vulnerable to undetected malware infections.",
        },
        {
          response: "Never",
          possible_threat:
            "Very high risk. Not running any antivirus scans exposes your devices to undetected malware or viruses.",
        },
      ],
    },
  ],

  "Social Engineering": [
    {
      question:
        "Have you enabled two-factor authentication on any of your accounts?",
      options: [
        {
          response: "Yes, on all critical accounts",
          possible_threat:
            "Low risk. Two-factor authentication significantly reduces the chances of unauthorized access to your accounts.",
        },
        {
          response: "Yes, on some accounts",
          possible_threat:
            "Moderate risk. Enabling two-factor authentication on only some accounts leaves other critical accounts vulnerable.",
        },
        {
          response: "No, but I know about it",
          possible_threat:
            "High risk. Not enabling two-factor authentication leaves your accounts more susceptible to unauthorized access.",
        },
        {
          response: "No, I'm not familiar with it",
          possible_threat:
            "Very high risk. Lack of awareness and failure to use two-factor authentication makes your accounts highly vulnerable to attacks.",
        },
      ],
    },
  ],

  "Public Wi-Fi Vulnerabilities": [
    {
      question:
        "Do you use public Wi-Fi for accessing sensitive information (e.g., banking, email)?",
      options: [
        {
          response: "Never",
          possible_threat:
            "Low risk. Avoiding public Wi-Fi for sensitive tasks reduces exposure to man-in-the-middle attacks.",
        },
        {
          response: "Rarely",
          possible_threat:
            "Moderate risk. Occasional use of public Wi-Fi for sensitive tasks increases vulnerability to interception.",
        },
        {
          response: "Sometimes",
          possible_threat:
            "High risk. Regular use of public Wi-Fi for sensitive tasks exposes you to significant security threats.",
        },
        {
          response: "Often",
          possible_threat:
            "Very high risk. Frequently using public Wi-Fi for accessing sensitive information significantly increases the likelihood of data theft.",
        },
      ],
    },
    {
      question: "Do you use a VPN when accessing public Wi-Fi?",
      options: [
        {
          response: "Always",
          possible_threat:
            "Low risk. Using a VPN on public Wi-Fi ensures encrypted communication, reducing the risk of man-in-the-middle attacks.",
        },
        {
          response: "Sometimes",
          possible_threat:
            "Moderate risk. Using a VPN inconsistently may expose your traffic to threats when not using it.",
        },
        {
          response: "Rarely",
          possible_threat:
            "High risk. Rarely using a VPN exposes you to security threats on public networks.",
        },
        {
          response: "Never",
          possible_threat:
            "Very high risk. Not using a VPN on public Wi-Fi leaves your data exposed to interception.",
        },
      ],
    },
  ],

  "Data Breaches and Unauthorized Access": [
    {
      question:
        "How often do you update the passwords for your online accounts?",
      options: [
        {
          response: "Every 1-3 months",
          possible_threat:
            "Low risk. Regular password changes reduce the chances of unauthorized access.",
        },
        {
          response: "Every 6 months",
          possible_threat:
            "Moderate risk. Less frequent updates may expose your accounts to potential breaches if a password is compromised.",
        },
        {
          response: "Once a year",
          possible_threat:
            "High risk. Rarely updating passwords increases vulnerability to breaches and unauthorized access.",
        },
        {
          response: "Rarely or never",
          possible_threat:
            "Very high risk. Using the same password for long periods without updating it significantly increases the risk of unauthorized access.",
        },
      ],
    },
  ],

  "Password Theft and Account Hijacking": [
    {
      question:
        "Do you use a password manager to store and generate unique passwords?",
      options: [
        {
          response: "Yes, I use a password manager",
          possible_threat:
            "Low risk. A password manager ensures strong, unique passwords for all accounts, reducing the risk of password theft.",
        },
        {
          response: "No, but I use unique passwords",
          possible_threat:
            "Moderate risk. Not using a password manager makes it harder to manage unique passwords and may lead to weaker password practices.",
        },
        {
          response: "No, I reuse some passwords",
          possible_threat:
            "High risk. Reusing passwords across multiple accounts increases the risk of account hijacking if one password is leaked.",
        },
        {
          response: "No, I reuse passwords frequently",
          possible_threat:
            "Very high risk. Reusing passwords across accounts makes it easy for attackers to compromise multiple accounts if one password is exposed.",
        },
      ],
    },
  ],
};

const threats_recommendations = {
  "Phishing Attacks": [
    {
      "recommendation": "Always verify the sender's email address before clicking on any links, especially in unexpected emails."
    },
    {
      "recommendation": "Be cautious with unexpected messages containing links or attachments; avoid clicking on them without verification."
    },
    {
      "recommendation": "Learn about common phishing indicators, such as spelling errors, unfamiliar URLs, and urgent messages asking for personal information."
    }
  ],
  "Ransomware": [
    {
      "recommendation": "Establish a regular backup schedule for your critical files, storing backups in a separate and secure location."
    },
    {
      "recommendation": "Consider using cloud storage services with version control, which can help you recover uninfected copies of files."
    },
    {
      "recommendation": "Be cautious of unsolicited downloads or attachments, and avoid downloading files from unknown sources."
    }
  ],
  "Malware and Viruses": [
    {
      "recommendation": "Run antivirus or anti-malware scans regularly, ideally daily or weekly, to detect and prevent malware infections."
    },
    {
      "recommendation": "Keep your antivirus software up to date to protect against the latest threats."
    },
    {
      "recommendation": "Avoid downloading software from unofficial sources, as they can carry malware or viruses."
    }
  ],
  "Social Engineering": [
    {
      "recommendation": "Enable two-factor authentication (2FA) on all critical accounts to add an extra layer of security."
    },
    {
      "recommendation": "Educate yourself about social engineering tactics to better recognize when someone may be trying to manipulate you."
    },
    {
      "recommendation": "Be cautious when sharing personal information online or over the phone, especially with unknown parties."
    }
  ],
  "Public Wi-Fi Vulnerabilities": [
    {
      "recommendation": "Avoid accessing sensitive information, such as banking or email, on public Wi-Fi networks whenever possible."
    },
    {
      "recommendation": "Use a Virtual Private Network (VPN) when connecting to public Wi-Fi to encrypt your internet traffic and protect against interception."
    },
    {
      "recommendation": "Disable file sharing and turn off auto-connect features on your device when using public Wi-Fi."
    }
  ],
  "Data Breaches and Unauthorized Access": [
    {
      "recommendation": "Update passwords for your online accounts every 1-3 months to limit the risk of unauthorized access."
    },
    {
      "recommendation": "Use unique passwords for each account to prevent a breach in one account from compromising others."
    },
    {
      "recommendation": "Enable security alerts on your accounts to get notified of any unusual or unauthorized login attempts."
    }
  ],
  "Password Theft and Account Hijacking": [
    {
      "recommendation": "Use a password manager to store and generate unique, strong passwords for each account."
    },
    {
      "recommendation": "Avoid reusing passwords across multiple accounts, as this increases the risk of account hijacking."
    },
    {
      "recommendation": "Regularly update your passwords and use complex combinations of letters, numbers, and symbols."
    }
  ]
}

class ThreatAssessment {
  constructor(questionsWithCategories, recommendations) {
    this.questionsWithCategories = questionsWithCategories;
    this.recommendations = recommendations;
  }

  // Method to generate a threat assessment report with recommendations
  assessThreat(responses) {
    let threatReport = {};

    // Iterate over each category in the questions list
    for (const category in this.questionsWithCategories) {
      const questions = this.questionsWithCategories[category];
      threatReport[category] = { threats: [], recommendations: [] };

      // Iterate over each question in the category
      questions.forEach((questionItem) => {
        const userResponse = responses[questionItem.question];
        if (!userResponse) return; // Skip if no response for this question

        // Find the option that matches the user's response
        const option = questionItem.options.find(
          (opt) => opt.response === userResponse
        );

        if (option) {
          // Store the threat information in the report
          threatReport[category].threats.push({
            question: questionItem.question,
            response: userResponse,
            possibleThreat: option.possible_threat,
          });
        }
      });

      // Include recommendations for each category
      if (this.recommendations[category]) {
        this.recommendations[category].forEach((recommendationItem) => {
          threatReport[category].recommendations.push(
            recommendationItem.recommendation
          );
        });
      }
    }

    return threatReport;
  }
}

// Instantiate the class
const threatAssessment = new ThreatAssessment(questions_with_categories, threats_recommendations);

// Sample user responses object
const userResponses = {
  "How often do you verify the sender's email address before clicking on a link?": "Sometimes",
  "How familiar are you with identifying phishing attacks?":"Somewhat familiar",
  "Do you use a password manager to store and generate unique passwords?":"Yes, I use a password manager"
};

// Generate the threat report based on user responses
const threatReport = threatAssessment.assessThreat(userResponses);
// console.log(threatReport);









