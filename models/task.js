const mongoose = require("mongoose");

console.log("Connecting to database...");

const URI = process.env.MONGODB_URI;

mongoose
  .connect(URI)
  .then((result) => {
    console.log(`Connected!`);
  })
  .catch((error) => {
    console.log(`Error connecting to database: ${error.message}`);
  });

const task_schema = mongoose.Schema({
  task: String,
});

task_schema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Task", task_schema);
