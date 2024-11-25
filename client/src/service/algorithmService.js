const questions_with_categories = { // this one is very necessary sababu it gets the possible threat given a specific option selected.

  "Phishing Attacks": [
    {
      "question": "How often do you verify the sender email address before clicking on a link?",
      "options": [
        {
          "response": "Always",
          "possible_threat": "Low risk of phishing attacks. Regular verification reduces the likelihood of falling for phishing attempts.",
          "recommendation": "Continue verifying sender details consistently and educate others about phishing awareness."
        },
        {
          "response": "Sometimes",
          "possible_threat": "Moderate risk of phishing. Inconsistent verification may lead to accidental clicks on phishing links.",
          "recommendation": "Increase consistency in verifying sender details to reduce exposure to phishing risks."
        },
        {
          "response": "Rarely",
          "possible_threat": "High risk of phishing. Rarely verifying emails increases the chances of falling for phishing scams.",
          "recommendation": "Start verifying sender email addresses for all communications to prevent phishing attempts."
        },
        {
          "response": "Never",
          "possible_threat": "Very high risk of phishing. Not verifying email addresses at all significantly exposes you to phishing attacks.",
          "recommendation": "Educate yourself on phishing attacks and develop a habit of verifying all sender details."
        }
      ]
    },
    {
      "question": "When you receive a suspicious link or file in a message, how do you usually respond?",
      "options": [
        {
          "response": "Delete without opening",
          "possible_threat": "Low risk of malware, spyware, or phishing. Promptly deleting suspicious links helps mitigate these threats.",
          "recommendation": "Maintain this habit and encourage others to recognize and delete suspicious files."
        },
        {
          "response": "Ask the sender to verify",
          "possible_threat": "Moderate risk, but safer than opening. Contacting the sender is a good practice to verify suspicious links.",
          "recommendation": "Always confirm with senders for unfamiliar links; use alternative contact methods for verification."
        },
        {
          "response": "Open cautiously",
          "possible_threat": "Moderate risk of phishing, malware, or spyware. Opening suspicious files without caution can lead to infection or data theft.",
          "recommendation": "Avoid opening suspicious files altogether and run antivirus scans if accidental openings occur."
        },
        {
          "response": "Open without much concern",
          "possible_threat": "High risk of malware, ransomware, or phishing attacks. Ignoring the suspicious nature of links exposes your device and data to serious threats.",
          "recommendation": "Stop opening suspicious links and files; learn to identify phishing attempts."
        }
      ]
    },
    {
      "question": "How familiar are you with identifying phishing attacks?",
      "options": [
        {
          "response": "Very familiar",
          "possible_threat": "Low risk. Strong awareness of phishing techniques significantly reduces the chances of falling victim.",
          "recommendation": "Keep up-to-date on new phishing tactics and share your knowledge with others."
        },
        {
          "response": "Somewhat familiar",
          "possible_threat": "Moderate risk. Limited knowledge of phishing tactics may lead to falling for more sophisticated attacks.",
          "recommendation": "Enhance your knowledge through online resources, webinars, or training on phishing tactics."
        },
        {
          "response": "Slightly familiar",
          "possible_threat": "High risk. Inadequate awareness of phishing could result in missing red flags and falling for phishing attempts.",
          "recommendation": "Dedicate time to learning about phishing indicators to improve your awareness."
        },
        {
          "response": "Not familiar",
          "possible_threat": "Very high risk. Lack of awareness makes you highly vulnerable to phishing attacks.",
          "recommendation": "Take phishing awareness training and start implementing safer online habits."
        }
      ]
    }
  ],
  "Ransomware": [
    {
      "question": "Do you regularly back up your important files?",
      "options": [
        {
          "response": "Yes, weekly",
          "possible_threat": "Low risk of ransomware. Regular backups ensure that files are recoverable in case of a ransomware attack.",
          "recommendation": "Ensure backups are automated and stored in secure, encrypted locations."
        },
        {
          "response": "Yes, monthly",
          "possible_threat": "Moderate risk. While regular backups reduce the impact of ransomware, longer gaps between backups increase data loss potential.",
          "recommendation": "Increase backup frequency to weekly to minimize data loss in case of an attack."
        },
        {
          "response": "Yes, occasionally",
          "possible_threat": "High risk. Infrequent backups may lead to significant data loss if attacked by ransomware.",
          "recommendation": "Set up regular automated backups to safeguard your data."
        },
        {
          "response": "No, never",
          "possible_threat": "Very high risk. Not backing up files leaves you vulnerable to data loss in the event of a ransomware attack.",
          "recommendation": "Implement a reliable backup system immediately and prioritize securing critical files."
        }
      ]
    }
  ],
  "Malware and Viruses": [
    {
      "question": "How frequently do you run antivirus or anti-malware scans on your devices?",
      "options": [
        {
          "response": "Daily",
          "possible_threat": "Low risk. Regular antivirus scans help prevent malware infections from going undetected.",
          "recommendation": "Keep your antivirus software updated and maintain regular scans."
        },
        {
          "response": "Weekly",
          "possible_threat": "Low to moderate risk. Weekly scans are effective but may not detect more recent or sophisticated threats.",
          "recommendation": "Consider increasing scan frequency if you suspect frequent exposure to malicious content."
        },
        {
          "response": "Monthly",
          "possible_threat": "Moderate risk. Monthly scans are less frequent and may miss malware infections or updates to existing threats.",
          "recommendation": "Schedule weekly scans and ensure software updates to detect recent threats."
        },
        {
          "response": "Rarely",
          "possible_threat": "High risk. Infrequent scans leave your system vulnerable to undetected malware infections.",
          "recommendation": "Establish a routine for running regular scans and update your antivirus software."
        },
        {
          "response": "Never",
          "possible_threat": "Very high risk. Not running any antivirus scans exposes your devices to undetected malware or viruses.",
          "recommendation": "Install and use reputable antivirus software to scan and protect your devices regularly."
        }
      ]
    }
  ],
  "Social Engineering": [
    {
      "question": "Have you enabled two-factor authentication on any of your accounts?",
      "options": [
        {
          "response": "Yes, on all critical accounts",
          "possible_threat": "Low risk. Two-factor authentication significantly reduces the chances of unauthorized access to your accounts.",
          "recommendation": "Continue using two-factor authentication and encourage its use for all accounts."
        },
        {
          "response": "Yes, on some accounts",
          "possible_threat": "Moderate risk. Enabling two-factor authentication on only some accounts leaves other critical accounts vulnerable.",
          "recommendation": "Enable two-factor authentication for all sensitive accounts to strengthen security."
        },
        {
          "response": "No, but I know about it",
          "possible_threat": "High risk. Not enabling two-factor authentication leaves your accounts more susceptible to unauthorized access.",
          "recommendation": "Start enabling two-factor authentication on critical accounts immediately."
        },
        {
          "response": "No, Im not familiar with it",
          "possible_threat": "Very high risk. Lack of awareness and failure to use two-factor authentication makes your accounts highly vulnerable to attacks.",
          "recommendation": "Learn about two-factor authentication and enable it on all accounts."
        }
      ]
    }
  ],
  "Public Wi-Fi Vulnerabilities": [
    {
      "question": "Do you use public Wi-Fi for accessing sensitive information (e.g., banking, email)?",
      "options": [
        {
          "response": "Never",
          "possible_threat": "Low risk. Avoiding public Wi-Fi for sensitive tasks reduces exposure to man-in-the-middle attacks.",
          "recommendation": "Maintain this habit and use a VPN when accessing public Wi-Fi for other tasks."
        },
        {
          "response": "Rarely",
          "possible_threat": "Moderate risk. Occasional use of public Wi-Fi for sensitive tasks increases vulnerability to interception.",
          "recommendation": "Avoid accessing sensitive information on public Wi-Fi and always use a VPN."
        },
        {
          "response": "Sometimes",
          "possible_threat": "High risk. Regular use of public Wi-Fi for sensitive tasks exposes you to significant security threats.",
          "recommendation": "Refrain from using public Wi-Fi for sensitive tasks and invest in a reliable VPN."
        },
        {
          "response": "Often",
          "possible_threat": "Very high risk. Frequently using public Wi-Fi for accessing sensitive information significantly increases the likelihood of data theft.",
          "recommendation": "Stop accessing sensitive information on public Wi-Fi and switch to secure, private networks."
        }
      ]
    },
    {
      "question": "Do you use a VPN when accessing public Wi-Fi?",
      "options": [
        {
          "response": "Always",
          "possible_threat": "Low risk. Using a VPN on public Wi-Fi ensures encrypted communication, reducing the risk of man-in-the-middle attacks.",
          "recommendation": "Continue using a VPN and verify that it provides strong encryption and no logging."
        },
        {
          "response": "Sometimes",
          "possible_threat": "Moderate risk. Inconsistent VPN usage on public Wi-Fi increases exposure to potential attacks.",
          "recommendation": "Use a VPN consistently whenever you access public Wi-Fi."
        },
        {
          "response": "Rarely",
          "possible_threat": "High risk. Minimal VPN usage leaves most of your communications unprotected on public Wi-Fi.",
          "recommendation": "Begin using a VPN for all public Wi-Fi activities to safeguard your communications."
        },
        {
          "response": "Never",
          "possible_threat": "Very high risk. Not using a VPN on public Wi-Fi exposes all your communications to interception and potential misuse.",
          "recommendation": "Get a reputable VPN service and start using it to secure your data on public Wi-Fi."
        }
      ]
    }
  ],
  "Data Breaches and Unauthorized Access": [
    {
      "question": "Do you monitor your online accounts for unauthorized access?",
      "options": [
        {
          "response": "Yes, regularly",
          "possible_threat": "Low risk. Regular monitoring helps detect unauthorized access early, reducing potential damage.",
          "recommendation": "Keep monitoring your accounts regularly and enable security alerts for unusual activities."
        },
        {
          "response": "Occasionally",
          "possible_threat": "Moderate risk. Infrequent monitoring may delay the discovery of unauthorized access.",
          "recommendation": "Increase the frequency of account monitoring and activate alerts for suspicious activities."
        },
        {
          "response": "Rarely",
          "possible_threat": "High risk. Rarely monitoring accounts increases the chances of undetected breaches.",
          "recommendation": "Regularly review account activity and secure your accounts with additional authentication measures."
        },
        {
          "response": "Never",
          "possible_threat": "Very high risk. Not monitoring accounts leaves you unaware of potential unauthorized access or breaches.",
          "recommendation": "Start monitoring your accounts and set up email or SMS alerts for suspicious activities."
        }
      ]
    },
    {
      "question": "Do you use unique passwords for all your accounts?",
      "options": [
        {
          "response": "Yes, for all accounts",
          "possible_threat": "Low risk. Unique passwords significantly reduce the impact of data breaches on multiple accounts.",
          "recommendation": "Continue creating strong, unique passwords and consider using a password manager for added security."
        },
        {
          "response": "For most accounts",
          "possible_threat": "Moderate risk. Reusing passwords for some accounts increases the impact of breaches.",
          "recommendation": "Ensure every account has a unique password and use a password manager to simplify this process."
        },
        {
          "response": "For a few accounts",
          "possible_threat": "High risk. Using the same passwords for most accounts increases vulnerability in case of breaches.",
          "recommendation": "Immediately create unique passwords for all accounts and prioritize securing critical ones."
        },
        {
          "response": "No, I reuse passwords",
          "possible_threat": "Very high risk. Reusing passwords exposes all linked accounts to compromise if one account is breached.",
          "recommendation": "Stop reusing passwords and update all accounts with unique and strong passwords."
        }
      ]
    }
  ],
  "Password Theft and Account Hijacking": [
    {
      "question": "Do you use multi-factor authentication for your accounts?",
      "options": [
        {
          "response": "Yes, for all accounts",
          "possible_threat": "Low risk. Multi-factor authentication adds a critical layer of protection against account hijacking.",
          "recommendation": "Keep using multi-factor authentication and update recovery information regularly."
        },
        {
          "response": "For some accounts",
          "possible_threat": "Moderate risk. Accounts without multi-factor authentication remain vulnerable to hijacking.",
          "recommendation": "Enable multi-factor authentication for all accounts, especially critical ones."
        },
        {
          "response": "Rarely",
          "possible_threat": "High risk. Lack of multi-factor authentication leaves most accounts exposed to hijacking attempts.",
          "recommendation": "Start enabling multi-factor authentication across all platforms to secure your accounts."
        },
        {
          "response": "No, never",
          "possible_threat": "Very high risk. Not using multi-factor authentication leaves accounts highly vulnerable to theft.",
          "recommendation": "Learn about multi-factor authentication and enable it for every account to safeguard your information."
        }
      ]
    },
    {
      "question": "How do you store your passwords?",
      "options": [
        {
          "response": "In a password manager",
          "possible_threat": "Low risk. Password managers securely store passwords, minimizing the chances of theft.",
          "recommendation": "Continue using a password manager and ensure it is secured with a strong master password."
        },
        {
          "response": "Memorized",
          "possible_threat": "Moderate risk. Memorizing passwords reduces storage risks but may result in weaker, easily remembered passwords.",
          "recommendation": "Use a password manager to store strong, unique passwords without the burden of memorization."
        },
        {
          "response": "Written down",
          "possible_threat": "High risk. Written-down passwords are vulnerable to physical theft or exposure.",
          "recommendation": "Transition to a secure password manager and dispose of written records safely."
        },
        {
          "response": "Saved in browsers or apps",
          "possible_threat": "Very high risk. Storing passwords in browsers or apps may expose them to malware or unauthorized access.",
          "recommendation": "Remove saved passwords from browsers and apps; use a secure password manager instead."
        }
      ]
    }
  ]
}

// create an array with the question's info together with the user response
export function getResponseInfo (question,quiz) {
  let array = []
  if (question?.length > 0 && quiz?.length > 0) {
    quiz.forEach((object) => {
      const response = question.find((question) => question.questionId === object.questionId)
      
      if (response) {
        array.push({...object,...response})
      }
      
    })
  }
  return array
}

export function analyzeResponses(params) {
  const mappedResponses = params.map(response => {
    const category = questions_with_categories[response.categoryName];
    if (!category) return {...response, error: 'Category not found'};

    const question = category.find(q => q.question === response.questionText);
    if (!question) return {...response, error: 'Question not found'};

    const option = question.options.find(o => o.response === response.response)
    if (!option) return {...response, error: 'Response option not found'};

    return {
      ...response,
      possible_threat: option.possible_threat,
      recommendation: option.recommendation
    };
  })

  return mappedResponses;
}












