require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const Task = require("./models/task");
const errorHandler = require("./utils/middleware");

morgan.token("body", (request, response) => {
  return JSON.stringify(request.body);
});

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);

  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({
    error: "Unknown endpoint!",
  });
};

app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);
app.use(cors());
app.use(express.static("build"));

app.get("/", (request, response) => {
  response.send("<h1>Welcome to Task Manager</h1>");
});

app.get("/api/tasks", (request, response) => {
  Task.find({}).then((result) => {
    response.json(result);
  });
});

app.get("/api/tasks/:id", (request, response) => {
  const task = Task.findById(request.params.id);

  if (task) {
    task
      .then((result) => {
        response.json(result);
      })
      .catch((error) => {
        console.log(`Error: ${error.message}`);
      });
  } else {
    response.status(404).end();
  }
});

app.post("/api/tasks/", (request, response) => {
  const body = request.body;

  if (body.task === undefined) {
    return response.status(400).json({
      error: "Task missing!",
    });
  }

  const new_task = new Task({
    task: body.task,
  });

  new_task.save().then((result) => {
    response.json(result);
    console.log(`Task added successfully!`);
  });
});

app.delete("/api/tasks/:id", (request, response) => {
  Task.findByIdAndDelete(request.params.id).then((result) => {
    response.status(204).end();
  });
});

app.use(unknownEndpoint);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
