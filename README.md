# Log Report App

The application allows the user to save a log report with a name and an email in a database. The log can have any number of lines. Each line begins with either E for errors, W for warnings and I for informational messages. Error messages then have a number indicating the severity of the error (1-100). All types of messages then have an integer timestamp and a textual content which runs until the end of the line. Example valid lines:

```
I 6 Nothing to report
W 7 Out for lunch
E 42 21 ERROR: Something has gone horribly wrong
I 52 Something went wrong while I was out for lunch
```
Log lines are validated to the template, sorted with the timestamps in ascending order and inserted into a database. User can search for any user logs and receive only error messages with severity of at least 50.

The frontend is implemented in React and connected to an API written in Node.js. A data are saved in MongoDB.

## Prerequisites

- Install [Node.js](https://nodejs.org/en/) version 16.18.0
- Create Database & Collection & Database User & Connection String in [MongoDB](https://www.mongodb.com/)

## Getting started

- Clone repository
```
git clone https://github.com/KatarzynaBienkowska/log-report-app.git
```
- Install dependencies

In first terminal:
```
cd backend
npm install
```
In second terminal:
```
cd frontend
npm install
```
- Set environment variables in backend folder
```
DATABASE_URI={Connection String to MongoDB}
```
## Run application
In both terminals:
```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You can also run backend in a development mode using nodemon:
```
npm run dev
```

## Run tests

For both frontend and backend tests:
```
npm test
```
