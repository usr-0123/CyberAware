CREATE TABLE tbl_Questions
(
    questionId VarChar(255) PRIMARY KEY,
    createdDate Date,
    questionWeight INT,
    questionCategoryId VarChar(255),
    questionText VarChar(999),
);

INSERT INTO tbl_Questions (questionId, createdDate, questionWeight, questionCategoryId, questionText) VALUES
('10806d08-903f-4c21-a244-d4845ab87e10', '2024-11-21', 10, '74e17e58-92d1-4d43-9d31-b479be76a76b', 'Have you enabled two-factor authentication on any of your accounts?'),
('1dc19852-bd74-40ba-9e11-9be9f67e5054', '2024-11-21', 10, '8c9327ec-5780-449f-a29e-cfca526b337b', 'How cautious are you when downloading software from the internet?'),
('20e6893f-1eca-4b2c-b9e7-03d527521c42', '2024-11-21', 10, 'fab387d8-98ba-4254-92db-eb3cfc8b0f59', 'Do you use public Wi-Fi for accessing sensitive information (e.g., banking, email)?'),
('2135a4fa-91a2-447f-9914-f0fa32804601', '2024-11-21', 10, 'dcc31567-0762-4379-917f-21eed6f7e725', 'How familiar are you with identifying phishing attacks?'),
('295d91e1-cf04-46d1-ad8c-3110b74dd5bb', '2024-11-21', 10, '85e0b4e2-541a-434f-9b90-316bd3442ec9', 'How frequently do you run antivirus or anti-malware scans on your devices?'),
('2b29af02-bbf4-4646-9878-5a5356ad729e', '2024-11-21', 10, '4bf42400-36da-476e-82e3-54ba976b671f', 'How often do you update the passwords for your online accounts?'),
('319ccf93-3da6-4a2e-9654-a05224189ec4', '2024-11-21', 10, '3ff52637-77c2-4291-9cea-d7bdc8494a97', 'Do you regularly update the apps and operating system on your mobile device?'),
('3a82a83f-6f8d-4d07-8797-e0d0a1b2dd6c', '2024-11-21', 10, 'dcc31567-0762-4379-917f-21eed6f7e725', 'How often do you verify the senders email address before clicking on a link?'),
('47f10d9b-f788-4bf9-86e4-15d4729f1eb3', '2024-11-21', 10, '8aa0e6d4-f677-4823-a867-d3f37357fc9d', 'Do you have a way to track or remotely wipe your mobile device in case its lost or stolen?'),
('48e14150-e046-4174-86b9-4f3ef857e04f', '2024-11-21', 10, '858ba6ee-a7c6-4cca-959a-49e42d0ab3f0', 'Do you store sensitive data in cloud services, and do you ensure proper encryption and access control?'),
('57c7ad87-0200-41a2-b195-203812c41198', '2024-11-21', 10, 'dcc31567-0762-4379-917f-21eed6f7e725', 'When you receive a suspicious link or file in a message, how do you usually respond?'),
('5fa015ff-4af9-479d-ba00-de3b2301e11b', '2024-11-21', 10, '7b18cdb9-0201-4238-94af-84f771449800', 'Are your software and applications up to date with the latest security patches?'),
('6ea7dcce-964d-4d8d-8d93-86037d7788d4', '2024-11-21', 10, 'fab387d8-98ba-4254-92db-eb3cfc8b0f59', 'Do you use a VPN when accessing public Wi-Fi?'),
('8827048b-c7a8-483a-9fdc-4f02281416d6', '2024-11-21', 10, 'a0e24f7d-e9c3-4470-bbc8-de3143482ef8', 'Do you use a password manager to store and generate unique passwords?'),
('b0e20fcb-9692-438a-818c-d7daeb7bd406', '2024-11-21', 10, '7162a8d8-ac67-401a-85ac-35ce4d1bc535', 'Do you regularly back up your important files?'),
('c4c643c6-9d17-4899-a960-6a64cf392ad6', '2024-11-21', 10, '3ff52637-77c2-4291-9cea-d7bdc8494a97', 'How often do you check the permissions you grant to mobile apps?'),
('cb62f9c2-2a55-454d-8bf6-5e91581d70af', '2024-11-21', 10, 'ca7590c7-e425-49f7-b79f-d2fe49ab091d', 'Do you have any measures in place to protect your online services or website from DDoS attacks?'),
('d5f38c97-271c-453d-8f1c-b140cded093f', '2024-11-21', 10, '6e355464-61ac-4784-a4e5-463bbf043bdc', 'Do you use identity theft protection services or credit monitoring?'),
('efbb36c2-e31e-4422-a6e2-22e872431b8d', '2024-11-21', 10, 'ed8d08de-f919-4e36-a0da-f8a61d0459a1', 'Are your IoT devices (e.g., smart speakers, cameras) secured with strong passwords and updated software?');

SELECT *
FROM tbl_Questions;

delete from tbl_Questions
