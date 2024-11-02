# KuzmaDev Contact Form API

This project is the server-side part for the contact form of the KuzmaDev.com website, allowing users to send messages via email.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## Requirements

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- Gmail account to send emails

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/KuzmaDev.com.back-end.git
Navigate to the project directory:

bash
Copy code
cd KuzmaDev.com.back-end
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory of the project and add your credentials:

makefile
Copy code
PORT=5001
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
Usage
Start the server:

bash
Copy code
npm start
The server will run on port 5001.

API
Send Email
URL: /api/contact
Method: POST
Request Body:
json
Copy code
{
  "name": "Your Name",
  "email": "email@example.com",
  "subject": "Subject of the message",
  "message": "Your message"
}
Response:

Success: {"message": "Email sent successfully"}
Error: {"message": "Failed to send email"}
