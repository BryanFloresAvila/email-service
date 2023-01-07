# Email Service Backend
Service that sends 1 email for one or several notifications.
This service receives an http request from another [service](https://github.com/BryanFloresAvila/notification-service).
<br />
## Prerequisites

To have installed the following:

- [Node.js](https://nodejs.org/) (>= 16)
- [npm](https://www.npmjs.com/) (>= 9)

<!-- Env Variables -->
### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file
`PORT`

`CORS_ORIGIN` Domain in which the request is made

`API_KEY`

`EMAIL_SECRET` 

`GOOGLE_SECRET` Application password

## Getting Started

<!-- Run Locally -->
### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/Louis3797/awesome-readme-template.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
## Usage

You can test the API at:

https://email-service-a0sh.onrender.com

### Endpoints
The following are the endpoints available in the API:

- POST `api/email/sendEmail`: A notification is sent to be processed with the others and an email is sent.
