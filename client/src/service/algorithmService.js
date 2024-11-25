const questions_with_categories = {
  // this one is very necessary sababu it gets the possible threat given a specific option selected.

  "Phishing Attacks": [
    {
      question:
        "How often do you verify the senders email address before clicking on a link?",
      options: [
        {
          response: "Always",
          possible_threat:
            "Low risk of phishing attacks. Regular verification reduces the likelihood of falling for phishing attempts.",
          recommendation:
            "Continue verifying sender details consistently and educate others about phishing awareness.",
        },
        {
          response: "Sometimes",
          possible_threat:
            "Moderate risk of phishing. Inconsistent verification may lead to accidental clicks on phishing links.",
          recommendation:
            "Increase consistency in verifying sender details to reduce exposure to phishing risks.",
        },
        {
          response: "Rarely",
          possible_threat:
            "High risk of phishing. Rarely verifying emails increases the chances of falling for phishing scams.",
          recommendation:
            "Start verifying sender email addresses for all communications to prevent phishing attempts.",
        },
        {
          response: "Never",
          possible_threat:
            "Very high risk of phishing. Not verifying email addresses at all significantly exposes you to phishing attacks.",
          recommendation:
            "Educate yourself on phishing attacks and develop a habit of verifying all sender details.",
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
          recommendation:
            "Maintain this habit and encourage others to recognize and delete suspicious files.",
        },
        {
          response: "Ask the sender to verify",
          possible_threat:
            "Moderate risk, but safer than opening. Contacting the sender is a good practice to verify suspicious links.",
          recommendation:
            "Always confirm with senders for unfamiliar links; use alternative contact methods for verification.",
        },
        {
          response: "Open cautiously",
          possible_threat:
            "Moderate risk of phishing, malware, or spyware. Opening suspicious files without caution can lead to infection or data theft.",
          recommendation:
            "Avoid opening suspicious files altogether and run antivirus scans if accidental openings occur.",
        },
        {
          response: "Open without much concern",
          possible_threat:
            "High risk of malware, ransomware, or phishing attacks. Ignoring the suspicious nature of links exposes your device and data to serious threats.",
          recommendation:
            "Stop opening suspicious links and files; learn to identify phishing attempts.",
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
          recommendation:
            "Keep up-to-date on new phishing tactics and share your knowledge with others.",
        },
        {
          response: "Somewhat familiar",
          possible_threat:
            "Moderate risk. Limited knowledge of phishing tactics may lead to falling for more sophisticated attacks.",
          recommendation:
            "Enhance your knowledge through online resources, webinars, or training on phishing tactics.",
        },
        {
          response: "Slightly familiar",
          possible_threat:
            "High risk. Inadequate awareness of phishing could result in missing red flags and falling for phishing attempts.",
          recommendation:
            "Dedicate time to learning about phishing indicators to improve your awareness.",
        },
        {
          response: "Not familiar",
          possible_threat:
            "Very high risk. Lack of awareness makes you highly vulnerable to phishing attacks.",
          recommendation:
            "Take phishing awareness training and start implementing safer online habits.",
        },
      ],
    },
  ],
  "Ransomware": [
    {
      question: "Do you regularly back up your important files?",
      options: [
        {
          response: "Yes, weekly",
          possible_threat:
            "Low risk of ransomware. Regular backups ensure that files are recoverable in case of a ransomware attack.",
          recommendation:
            "Ensure backups are automated and stored in secure, encrypted locations.",
        },
        {
          response: "Yes, monthly",
          possible_threat:
            "Moderate risk. While regular backups reduce the impact of ransomware, longer gaps between backups increase data loss potential.",
          recommendation:
            "Increase backup frequency to weekly to minimize data loss in case of an attack.",
        },
        {
          response: "Yes, occasionally",
          possible_threat:
            "High risk. Infrequent backups may lead to significant data loss if attacked by ransomware.",
          recommendation:
            "Set up regular automated backups to safeguard your data.",
        },
        {
          response: "No, never",
          possible_threat:
            "Very high risk. Not backing up files leaves you vulnerable to data loss in the event of a ransomware attack.",
          recommendation:
            "Implement a reliable backup system immediately and prioritize securing critical files.",
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
          recommendation:
            "Keep your antivirus software updated and maintain regular scans.",
        },
        {
          response: "Weekly",
          possible_threat:
            "Low to moderate risk. Weekly scans are effective but may not detect more recent or sophisticated threats.",
          recommendation:
            "Consider increasing scan frequency if you suspect frequent exposure to malicious content.",
        },
        {
          response: "Monthly",
          possible_threat:
            "Moderate risk. Monthly scans are less frequent and may miss malware infections or updates to existing threats.",
          recommendation:
            "Schedule weekly scans and ensure software updates to detect recent threats.",
        },
        {
          response: "Rarely",
          possible_threat:
            "High risk. Infrequent scans leave your system vulnerable to undetected malware infections.",
          recommendation:
            "Establish a routine for running regular scans and update your antivirus software.",
        },
        {
          response: "Never",
          possible_threat:
            "Very high risk. Not running any antivirus scans exposes your devices to undetected malware or viruses.",
          recommendation:
            "Install and use reputable antivirus software to scan and protect your devices regularly.",
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
          recommendation:
            "Continue using two-factor authentication and encourage its use for all accounts.",
        },
        {
          response: "Yes, on some accounts",
          possible_threat:
            "Moderate risk. Enabling two-factor authentication on only some accounts leaves other critical accounts vulnerable.",
          recommendation:
            "Enable two-factor authentication for all sensitive accounts to strengthen security.",
        },
        {
          response: "No, but I know about it",
          possible_threat:
            "High risk. Not enabling two-factor authentication leaves your accounts more susceptible to unauthorized access.",
          recommendation:
            "Start enabling two-factor authentication on critical accounts immediately.",
        },
        {
          response: "No, Im not familiar with it",
          possible_threat:
            "Very high risk. Lack of awareness and failure to use two-factor authentication makes your accounts highly vulnerable to attacks.",
          recommendation:
            "Learn about two-factor authentication and enable it on all accounts.",
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
          recommendation:
            "Maintain this habit and use a VPN when accessing public Wi-Fi for other tasks.",
        },
        {
          response: "Rarely",
          possible_threat:
            "Moderate risk. Occasional use of public Wi-Fi for sensitive tasks increases vulnerability to interception.",
          recommendation:
            "Avoid accessing sensitive information on public Wi-Fi and always use a VPN.",
        },
        {
          response: "Sometimes",
          possible_threat:
            "High risk. Regular use of public Wi-Fi for sensitive tasks exposes you to significant security threats.",
          recommendation:
            "Refrain from using public Wi-Fi for sensitive tasks and invest in a reliable VPN.",
        },
        {
          response: "Often",
          possible_threat:
            "Very high risk. Frequently using public Wi-Fi for accessing sensitive information significantly increases the likelihood of data theft.",
          recommendation:
            "Stop accessing sensitive information on public Wi-Fi and switch to secure, private networks.",
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
          recommendation:
            "Continue using a VPN and verify that it provides strong encryption and no logging.",
        },
        {
          response: "Sometimes",
          possible_threat:
            "Moderate risk. Inconsistent VPN usage on public Wi-Fi increases exposure to potential attacks.",
          recommendation:
            "Use a VPN consistently whenever you access public Wi-Fi.",
        },
        {
          response: "Rarely",
          possible_threat:
            "High risk. Minimal VPN usage leaves most of your communications unprotected on public Wi-Fi.",
          recommendation:
            "Begin using a VPN for all public Wi-Fi activities to safeguard your communications.",
        },
        {
          response: "Never",
          possible_threat:
            "Very high risk. Not using a VPN on public Wi-Fi exposes all your communications to interception and potential misuse.",
          recommendation:
            "Get a reputable VPN service and start using it to secure your data on public Wi-Fi.",
        },
      ],
    },
  ],
  "Data Breaches and Unauthorized Access": [
    {
      question: "Do you monitor your online accounts for unauthorized access?",
      options: [
        {
          response: "Every 1-3 months",
          possible_threat:
            "Low risk. Regular monitoring helps detect unauthorized access early, reducing potential damage.",
          recommendation:
            "Keep monitoring your accounts regularly and enable security alerts for unusual activities.",
        },
        {
          response: "Every 6 months",
          possible_threat:
            "Moderate risk. Infrequent monitoring may delay the discovery of unauthorized access.",
          recommendation:
            "Increase the frequency of account monitoring and activate alerts for suspicious activities.",
        },
        {
          response: "Once a year",
          possible_threat:
            "High risk. Rarely monitoring accounts increases the chances of undetected breaches.",
          recommendation:
            "Regularly review account activity and secure your accounts with additional authentication measures.",
        },
        {
          response: "Rarely or never",
          possible_threat:
            "Very high risk. Not monitoring accounts leaves you unaware of potential unauthorized access or breaches.",
          recommendation:
            "Start monitoring your accounts and set up email or SMS alerts for suspicious activities.",
        },
      ],
    },
    {
      question: "Do you use unique passwords for all your accounts?",
      options: [
        {
          response: "Yes, for all accounts",
          possible_threat:
            "Low risk. Unique passwords significantly reduce the impact of data breaches on multiple accounts.",
          recommendation:
            "Continue creating strong, unique passwords and consider using a password manager for added security.",
        },
        {
          response: "For most accounts",
          possible_threat:
            "Moderate risk. Reusing passwords for some accounts increases the impact of breaches.",
          recommendation:
            "Ensure every account has a unique password and use a password manager to simplify this process.",
        },
        {
          response: "For a few accounts",
          possible_threat:
            "High risk. Using the same passwords for most accounts increases vulnerability in case of breaches.",
          recommendation:
            "Immediately create unique passwords for all accounts and prioritize securing critical ones.",
        },
        {
          response: "No, I reuse passwords",
          possible_threat:
            "Very high risk. Reusing passwords exposes all linked accounts to compromise if one account is breached.",
          recommendation:
            "Stop reusing passwords and update all accounts with unique and strong passwords.",
        },
      ],
    },
  ],
  "Password Theft and Account Hijacking": [
    {
      question: "Do you use multi-factor authentication for your accounts?",
      options: [
        {
          response: "Yes, for all accounts",
          possible_threat:
            "Low risk. Multi-factor authentication adds a critical layer of protection against account hijacking.",
          recommendation:
            "Keep using multi-factor authentication and update recovery information regularly.",
        },
        {
          response: "For some accounts",
          possible_threat:
            "Moderate risk. Accounts without multi-factor authentication remain vulnerable to hijacking.",
          recommendation:
            "Enable multi-factor authentication for all accounts, especially critical ones.",
        },
        {
          response: "Rarely",
          possible_threat:
            "High risk. Lack of multi-factor authentication leaves most accounts exposed to hijacking attempts.",
          recommendation:
            "Start enabling multi-factor authentication across all platforms to secure your accounts.",
        },
        {
          response: "No, never",
          possible_threat:
            "Very high risk. Not using multi-factor authentication leaves accounts highly vulnerable to theft.",
          recommendation:
            "Learn about multi-factor authentication and enable it for every account to safeguard your information.",
        },
      ],
    },
    {
      question: "How do you store your passwords?",
      options: [
        {
          response: "In a password manager",
          possible_threat:
            "Low risk. Password managers securely store passwords, minimizing the chances of theft.",
          recommendation:
            "Continue using a password manager and ensure it is secured with a strong master password.",
        },
        {
          response: "Memorized",
          possible_threat:
            "Moderate risk. Memorizing passwords reduces storage risks but may result in weaker, easily remembered passwords.",
          recommendation:
            "Use a password manager to store strong, unique passwords without the burden of memorization.",
        },
        {
          response: "Written down",
          possible_threat:
            "High risk. Written-down passwords are vulnerable to physical theft or exposure.",
          recommendation:
            "Transition to a secure password manager and dispose of written records safely.",
        },
        {
          response: "Saved in browsers or apps",
          possible_threat:
            "Very high risk. Storing passwords in browsers or apps may expose them to malware or unauthorized access.",
          recommendation:
            "Remove saved passwords from browsers and apps; use a secure password manager instead.",
        },
      ],
    },
  ],
  "Mobile Device Threats": [
    {
      "question": "Do you regularly update the apps and operating system on your mobile device?",
      "options": [
        {
          "response": "Yes, automatically",
          "possible_threat": "Low risk of malware or system vulnerabilities. Automatic updates ensure that security patches and new features are consistently applied.",
          "recommendation": "Continue using automatic updates for apps and OS to stay secure."
        },
        {
          "response": "Yes, manually",
          "possible_threat": "Moderate risk. Manual updates may delay the application of security patches and updates, leaving the device vulnerable to attacks.",
          "recommendation": "Consider enabling automatic updates or check for updates regularly to ensure timely installation of security patches."
        },
        {
          "response": "Sometimes",
          "possible_threat": "High risk. Infrequent updates may expose your device to security vulnerabilities and performance issues.",
          "recommendation": "Increase the frequency of updates to ensure security patches are applied promptly."
        },
        {
          "response": "Never",
          "possible_threat": "Very high risk. Not updating your apps and OS leaves your device vulnerable to known security flaws and malware attacks.",
          "recommendation": "Start updating your apps and OS immediately to protect your device from potential threats."
        }
      ]
    },
    {
      "question": "How often do you check the permissions you grant to mobile apps?",
      "options": [
        {
          "response": "Always",
          "possible_threat": "Low risk. Regularly reviewing app permissions ensures that sensitive data is only accessible to trusted apps.",
          "recommendation": "Maintain the habit of checking app permissions and revoke unnecessary permissions to improve privacy."
        },
        {
          "response": "Sometimes",
          "possible_threat": "Moderate risk. Inconsistent checks may result in apps accessing unnecessary or sensitive data without your knowledge.",
          "recommendation": "Make it a routine to review app permissions to ensure your privacy is protected."
        },
        {
          "response": "Rarely",
          "possible_threat": "High risk. Rarely reviewing app permissions may leave your device vulnerable to unnecessary data access and privacy breaches.",
          "recommendation": "Start reviewing app permissions regularly to minimize the exposure of sensitive data."
        },
        {
          "response": "Never",
          "possible_threat": "Very high risk. Failing to check app permissions increases the risk of apps accessing personal data without your consent.",
          "recommendation": "Begin reviewing app permissions for all installed apps to secure your data and privacy."
        }
      ]
    }
  ],
  "Fake or Malicious Software Downloads": [
    {
      "question": "How cautious are you when downloading software from the internet?",
      "options": [
        {
          "response": "I only download from trusted sources",
          "possible_threat": "Minimal exposure to fake or malicious software, as trusted sources often provide verified software.",
          "recommendation": "Maintain your vigilance by downloading only from verified sources, and consider using antivirus software for additional protection."
        },
        {
          "response": "I verify but occasionally take risks",
          "possible_threat": "Moderate risk of exposure to malware, ransomware, or spyware due to occasional risky downloads.",
          "recommendation": "Avoid taking unnecessary risks and always ensure software is downloaded from reputable sources."
        },
        {
          "response": "I rarely verify",
          "possible_threat": "High risk of encountering malicious software that can compromise personal or organizational data.",
          "recommendation": "Adopt strict verification practices for all downloads and leverage tools like digital signatures or certificates to confirm authenticity."
        },
        {
          "response": "I often download without checking",
          "possible_threat": "Critical risk of infection by malware, spyware, or ransomware, leading to data breaches or system compromise.",
          "recommendation": "Immediately cease downloading unverified software and adopt tools like endpoint security solutions to protect your devices."
        }
      ]
    }
  ],
  "Identity Theft and Impersonation": [
    {
      "question": "Do you use identity theft protection services or credit monitoring?",
      "options": [
        {
          "response": "Yes, I use them",
          "possible_threat": "Low likelihood of falling victim to identity theft due to proactive monitoring and protection measures.",
          "recommendation": "Continue utilizing identity protection tools and monitor for suspicious activities in financial accounts."
        },
        {
          "response": "I plan to use them",
          "possible_threat": "Increased vulnerability to identity theft until services are implemented.",
          "recommendation": "Activate identity protection services promptly to mitigate risks related to unauthorized access or fraud."
        },
        {
          "response": "No, but I am considering it",
          "possible_threat": "Elevated risk of identity fraud or phishing attacks due to a lack of monitoring and protection.",
          "recommendation": "Prioritize setting up identity protection to safeguard sensitive personal information."
        },
        {
          "response": "No, I do not use them",
          "possible_threat": "Severe risk of identity theft, fraud, and data compromise from unmonitored and unsecured personal information.",
          "recommendation": "Implement identity theft protection or credit monitoring immediately to prevent potential exploitation."
        }
      ]
    }
  ],
  "Zero-Day Exploits": [
    {
      "question": "Are your software and applications up to date with the latest security patches?",
      "options": [
        {
          "response": "Yes, always",
          "possible_threat": "Low risk of exploitation via known vulnerabilities due to timely application of security patches.",
          "recommendation": "Maintain a routine of updating software and enable automatic updates for quicker response to threats."
        },
        {
          "response": "Yes, regularly",
          "possible_threat": "Moderate risk, as delays between patch release and installation can leave systems temporarily vulnerable.",
          "recommendation": "Minimize update delays and prioritize critical patches for sensitive systems or applications."
        },
        {
          "response": "I check occasionally",
          "possible_threat": "High risk of exposure to zero-day vulnerabilities during periods of outdated software.",
          "recommendation": "Schedule regular updates and implement automated tools to identify and install necessary patches."
        },
        {
          "response": "No, never",
          "possible_threat": "Extreme risk of compromise through unpatched vulnerabilities, often targeted by attackers.",
          "recommendation": "Immediately establish an update protocol to address existing vulnerabilities and protect against future threats."
        }
      ]
    }
  ],
  "Cloud Security Vulnerabilities": [
    {
      "question": "Do you store sensitive data in cloud services, and do you ensure proper encryption and access control?",
      "options": [
        {
          "response": "Yes, always secure",
          "possible_threat": "Minimal risk of unauthorized access or data breach due to stringent security measures.",
          "recommendation": "Continue to implement strong encryption and enforce access control policies regularly."
        },
        {
          "response": "Yes, but sometimes insecure",
          "possible_threat": "Moderate risk of breaches or unauthorized access due to inconsistent security practices.",
          "recommendation": "Adopt uniform security measures, including end-to-end encryption and least-privilege access control."
        },
        {
          "response": "No, I avoid cloud storage",
          "possible_threat": "Potential security challenges from managing local storage and backups without leveraging secure cloud options.",
          "recommendation": "Consider using reliable cloud services with robust security features for scalable and safe data management."
        },
        {
          "response": "I’m not sure how secure it is",
          "possible_threat": "High risk of data exposure from inadequate or misconfigured cloud security settings.",
          "recommendation": "Assess and upgrade the security protocols of your cloud services to ensure sensitive data is safeguarded."
        }
      ]
    }
  ],
  "Physical Theft of Devices": [
    {
      "question": "Do you have a way to track or remotely wipe your mobile device in case it’s lost or stolen?",
      "options": [
        {
          "response": "Yes, I have tracking/wiping enabled",
          "possible_threat": "Low risk of data exposure in the event of device theft due to proactive security measures.",
          "recommendation": "Maintain tracking and remote wipe features and periodically test their functionality."
        },
        {
          "response": "I plan to enable it",
          "possible_threat": "Moderate risk, as devices remain vulnerable until these measures are activated.",
          "recommendation": "Enable tracking and remote wiping features immediately to enhance device security."
        },
        {
          "response": "No, but I’m aware of it",
          "possible_threat": "High risk of data theft and misuse due to unprotected devices.",
          "recommendation": "Activate tracking and remote wipe features to mitigate risks related to device loss or theft."
        },
        {
          "response": "No, Im not aware of it",
          "possible_threat": "Critical risk of data exposure and identity theft from untracked and unprotected devices.",
          "recommendation": "Educate yourself about device security features and implement tracking and wiping tools without delay."
        }
      ]
    }
  ],
  "Spyware and Keyloggers": [
    {
      "question": "How cautious are you when downloading software from the internet?",
      "options": [
        {
          "response": "I only download from trusted sources",
          "possible_threat": "Minimal risk of infection with spyware or keyloggers from verified sources.",
          "recommendation": "Continue using only trusted sources and regularly scan downloads for malware."
        },
        {
          "response": "I verify but occasionally take risks",
          "possible_threat": "Moderate risk of accidental installation of spyware or keyloggers from unverified downloads.",
          "recommendation": "Adopt stricter verification practices to minimize exposure to malicious software."
        },
        {
          "response": "I rarely verify",
          "possible_threat": "High risk of unknowingly installing spyware or keyloggers, compromising sensitive data.",
          "recommendation": "Regularly verify download sources and use anti-spyware tools for added security."
        },
        {
          "response": "I often download without checking",
          "possible_threat": "Critical risk of system compromise by spyware or keyloggers, leading to data theft.",
          "recommendation": "Immediately stop unverified downloads and implement robust cybersecurity measures."
        }
      ]
    }
  ],
  "Denial of Service (DoS) or Distributed Denial of Service (DDoS) Attacks": [
    {
      "question": "Do you have any measures in place to protect your online services or website from DDoS attacks?",
      "options": [
        {
          "response": "Yes, I have DDoS protection",
          "possible_threat": "Low risk of service disruptions due to comprehensive protection against DDoS attacks.",
          "recommendation": "Regularly review and upgrade your DDoS mitigation strategies to stay ahead of evolving threats."
        },
        {
          "response": "I plan to implement DDoS protection",
          "possible_threat": "Moderate risk, as services remain exposed until protective measures are implemented.",
          "recommendation": "Deploy DDoS protection measures promptly to secure your online services."
        },
        {
          "response": "No, I do not have protection",
          "possible_threat": "High risk of significant service disruptions and financial losses from unmitigated attacks.",
          "recommendation": "Immediately implement robust DDoS protection strategies to safeguard online infrastructure."
        },
        {
          "response": "Not sure",
          "possible_threat": "High risk due to uncertainty and potential exposure to DDoS threats.",
          "recommendation": "Evaluate your security posture and ensure DDoS protections are in place and effective."
        }
      ]
    }
  ],
  "Unsecured IoT Devices": [
    {
      "question": "Are your IoT devices (e.g., smart speakers, cameras) secured with strong passwords and updated software?",
      "options": [
        {
          "response": "Yes, all are secured",
          "possible_threat": "Minimal risk of unauthorized access or exploitation due to strong security practices.",
          "recommendation": "Regularly update software and periodically change passwords to maintain security."
        },
        {
          "response": "Some are secured",
          "possible_threat": "Moderate risk, as unsecured devices can be exploited as entry points into your network.",
          "recommendation": "Ensure all IoT devices are secured with strong passwords and the latest firmware updates."
        },
        {
          "response": "Most are unsecured",
          "possible_threat": "High risk of compromise, leading to unauthorized access or data breaches.",
          "recommendation": "Audit and secure all IoT devices to eliminate vulnerabilities within your network."
        },
        {
          "response": "I’m unsure",
          "possible_threat": "Critical risk due to lack of awareness and unprotected devices.",
          "recommendation": "Assess and secure your IoT devices with strong passwords and regular updates."
        }
      ]
    }
  ]
};

// create an array with the question's info together with the user response
export function getResponseInfo(question, quiz) {
  let array = [];
  if (question?.length > 0 && quiz?.length > 0) {
    quiz.forEach((object) => {
      const response = question.find(
        (question) => question.questionId === object.questionId
      );

      if (response) {
        array.push({ ...object, ...response });
      }
    });
  }
  return array;
}

export function analyzeResponses(params) {
  const mappedResponses = params.map((response) => {
    const category = questions_with_categories[response.categoryName];
    if (!category) return { ...response, error: "Category not found" };

    const question = category.find((q) => q.question === response.questionText);
    if (!question) return { ...response, error: "Question not found" };

    const option = question.options.find(
      (o) => o.response === response.response
    );
    if (!option) return { ...response, error: "Response option not found" };

    return {
      ...response,
      possible_threat: option.possible_threat,
      recommendation: option.recommendation,
    };
  });

  return mappedResponses;
}
