# KuzmaDev.com: contact form API

Small Express API behind the contact form on [kuzma-dev-com.vercel.app](https://kuzma-dev-com.vercel.app). It validates the message and forwards it by email through Gmail.

Frontend: [KuzmaDev.com](https://github.com/kuzmavasil74/KuzmaDev.com)

## Stack

Node.js, Express 4, Joi, Nodemailer, CORS, dotenv. Hosted on Render.

## Run locally

```bash
npm install
cp .env.example .env   # then fill it in
npm start              # http://localhost:5001
```

### Environment variables

| Variable       | Description                                                                    |
| -------------- | ------------------------------------------------------------------------------ |
| `PORT`         | Port to listen on (default `5001`)                                             |
| `EMAIL_USER`   | Gmail address that sends and receives the messages                             |
| `EMAIL_PASS`   | Gmail [app password](https://support.google.com/accounts/answer/185833), not the account password |
| `CORS_ORIGINS` | Extra allowed origins, comma-separated (e.g. a custom domain). `https://kuzma-dev-com.vercel.app` is always allowed |

## API

### `POST /api/contact`

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Project idea",
  "message": "Hi Vasyl, I'd like to talk about..."
}
```

Rules: `name` 3–100 characters, `email` a valid address, `subject` 3–200, `message` 10–5000. Values are trimmed; the body may be at most 20 kB.

| Status | Body                                       |
| ------ | ------------------------------------------ |
| 200    | `{ "message": "Email sent successfully" }` |
| 400    | `{ "message": "<validation error>" }`      |
| 500    | `{ "message": "Failed to send email" }`    |

The email is sent from `EMAIL_USER` (Gmail does not allow other senders) with the visitor's address in `Reply-To`, so replying in Gmail answers the visitor.

### `GET /health`

Returns `{ "status": "ok" }`. Point an uptime monitor at it to keep the free Render instance from sleeping; otherwise the first request after idle takes about 30 seconds.

## Project layout

```
server.js                                    app setup, CORS, routes
routes/contactRoutes.js                      POST /api/contact
controllers/contactController.js             validation and sending
config/emailTransporter.js                   Nodemailer Gmail transport
utils/validationSchemas/contactValidation.js Joi schema
```

## Deploying on Render

Build command `npm install`, start command `npm start`, and the environment variables above.
