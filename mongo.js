const mongoose = require("mongoose");

const password = process.argv[2];
const new_task = process.argv[3];

const uri = `mongodb+srv://allwells:${password}@fso-cluster.9wjsr.mongodb.net/task-manager?retryWrites=true&w=majority`;

const task_schema = new mongoose.Schema({
  task: String,
});

const Task = mongoose.model("Task", task_schema);

const task = new Task({
  task: new_task,
});

mongoose.connect(uri);

if (process.argv.length === 3) {
  Task.find({}).then((result) => {
    result.forEach((tsk) => {
      console.log(`Task: ${tsk}`);
    });

    mongoose.connection.close();
  });
} else if (process.argv.length === 4) {
  task.save().then((result) => {
    console.log("Task saved!");
    mongoose.connection.close();
  });
} else {
  console.log(
    "Please provide arguments as shown: node mongo.js <password> <task>"
  );
  process.exit(1);
}
