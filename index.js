const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

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

let tasks = [
  {
    task: "Wash the car",
    id: 1,
  },
  {
    task: "Read the book",
    id: 2,
  },
  {
    task: "Hit the gym",
    id: 3,
  },
];

const taskID = () => {
  const max_id = tasks.length > 0 ? Math.max(...tasks.map((tsk) => tsk.id)) : 0;
  return max_id + 1;
};

app.get("/", (request, response) => {
  response.send("<h1>Welcome to Task Manager</h1>");
});

app.get("/api/tasks", (request, response) => {
  response.json(tasks);
});

app.get("/api/tasks/:id", (request, response) => {
  const id = Number(request.params.id);
  const task = tasks.find((tsk) => tsk.id === id);

  if (task) {
    response.json(task);
  } else {
    response.status(404).end();
  }
});

app.post("/api/tasks/", (request, response) => {
  const body = request.body;
  const exists = tasks.find((tsk) => tsk.task === body.task);

  if (!body.task) {
    return response.status(400).json({
      error: "Task missing!",
    });
  }

  if (exists) {
    return response.status(400).json({
      error: "Task already exists!",
    });
  }

  const new_task = {
    task: body.task,
    id: taskID(),
  };

  tasks = tasks.concat(new_task);

  response.json(new_task);
});

app.delete("/api/tasks/:id", (request, response) => {
  const id = Number(request.params.id);
  tasks = tasks.filter((tsk) => tsk.id !== id);

  response.json(tasks);
  response.status(204).end();
});

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
