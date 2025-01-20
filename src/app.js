const express = require("express");
const mongoose = require("mongoose")
const dotenv = require('dotenv').config();
const usersRouter = require("./users/users.router");
const quotesRouter = require("./quotes/quotes.router");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

// Write your code here
mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true
    })
    .then(() => {
      console.log("Connected to MongoDB!")
    })
    .catch(error => console.error(error.message));

app.get("/", (req, res) => {
    res.send("Hello!  Welcome to the Mongo Chegg-Dev API Query Service!");
});
app.use("/users", usersRouter);
app.use("/quotes", quotesRouter);

// Not found handler
app.use((request, response, next) => {
  next(`Not found: ${request.originalUrl}`);
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;
