// build your server here and require it from index.js
const express = require("express");

const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express();

// middlewares
server.use(express.json());

// routers
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

// defaults
server.use("/", (req, res) => {
  res.send(`<h2>Look Ma, I built an API!</h2>`);
});

// server error
//eslint-disable-next-line
server.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
