CREATE TABLE tbl_Categories
(
    categoryID VarChar(255) PRIMARY KEY,
    categoryName VarChar(255),
    categoryDescription VARCHAR(999),
);

INSERT INTO tbl_Categories (categoryID, categoryName, categoryDescription) VALUES
('025f5926-42e5-4fc9-8301-55f46f3bdc1d', 'Denial of Service (DoS) or Distributed Denial of Service (DDoS) Attacks', 'Flooding a network or website with excessive traffic to make it inaccessible to legitimate users, disrupting online services.'),
('0cb9a94c-070d-4686-a000-94953d290bd5', 'Malware and Viruses', 'Software intentionally designed to damage, disrupt, or gain unauthorized access to devices and networks. Malware includes viruses, worms, and spyware.'),
('35cfa28b-141c-4a0d-899c-f6db4dec78da', 'Data Breaches and Unauthorized Access', 'Incidents where sensitive data is accessed or stolen by unauthorized parties, often due to weak passwords or poor access controls.'),
('4bbaebef-e340-4f14-905a-e2e3edb0159b', 'Cloud Security Vulnerabilities', 'Risks associated with storing data in cloud services, including weak access controls, improper configurations, and lack of monitoring.'),
('4d522d5c-923f-4c2c-bc7d-c148c1039ad4', 'Ransomware', 'Malicious software that encrypts files or locks systems, demanding payment (ransom) to restore access. Commonly spreads through infected links or downloads.'),
('64de9f29-7944-4405-a479-2b0db36f1060', 'Social Engineering', 'Techniques that exploit human psychology to manipulate individuals into revealing confidential information or breaking security protocols.'),
('6a0f26cc-fff9-41ef-9863-1a533ca9a0e9', 'Public Wi-Fi Vulnerabilities', 'Security risks related to using unsecured public Wi-Fi networks, where attackers may intercept data or conduct ''man-in-the-middle'' attacks.'),
('760d0555-dca1-4b53-abfc-4284a36a021b', 'Identity Theft and Impersonation', 'Using stolen personal information to impersonate an individual, often for financial gain, reputation damage, or other malicious purposes.'),
('7be6b798-bb47-4f5a-ba97-534fe63d7617', 'Zero-Day Exploits', 'Attacks that exploit unknown or unpatched vulnerabilities in software before developers release fixes, often causing widespread impact.'),
('9320ec86-c4b5-4278-a903-619466547d4f', 'Password Theft and Account Hijacking', 'Gaining unauthorized access to user accounts by stealing or guessing passwords, which can lead to identity theft and loss of personal data.'),
('af411fc0-4559-409c-8e02-90254af0058a', 'Unsecured IoT Devices', 'Poorly secured Internet of Things (IoT) devices, such as smart home gadgets, that can be exploited by attackers to access personal networks.'),
('b558b3c1-51e0-40e5-9d6c-8a242ab75fb0', 'Phishing Attacks', 'Attempts to deceive users into providing sensitive information by impersonating legitimate entities through fake emails, messages, or websites.'),
('cccc8c02-4828-4464-af91-371a763e10ec', 'Mobile Device Threats', 'Security risks specific to mobile devices, such as mobile phishing, unsecured apps, and risky permissions that may expose sensitive information.'),
('cee0ca5a-50ec-4719-838e-9ea54e1991c9', 'Physical Theft of Devices', 'Loss or theft of devices containing sensitive data, potentially allowing unauthorized access if the device is not secured properly.'),
('d8a219e0-8007-4318-ac8b-8b07c9f58bca', 'Spyware and Keyloggers', 'Software that covertly monitors and records user activity, such as keystrokes or browsing habits, to gather sensitive information for attackers.'),
('f1ae095e-0b03-4063-b5ff-779534f844a2', 'Fake or Malicious Software Downloads', 'Software downloaded from untrustworthy sources, potentially containing malware, spyware, or adware that compromises device security.');

SELECT * FROM tbl_Categories;

-- drop TABLE tbl_Categories;