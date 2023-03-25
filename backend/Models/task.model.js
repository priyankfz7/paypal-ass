const { default: mongoose } = require("mongoose");

const taskSchema = mongoose.Schema({
  title: String,
  sprintID: String,
  userID: String,
});

const taskModel = mongoose.model("task", taskSchema);

module.exports = { taskModel };
