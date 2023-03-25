const express = require("express");
const { taskModel } = require("../Models/task.model");

const taskRouter = express.Router();

taskRouter.get("/", async (req, res) => {
  const { userID } = req.body;
  try {
    const tasks = await taskModel.find({ userID, ...req.query });
    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went Wrong" });
  }
});

taskRouter.post("/create", async (req, res) => {
  try {
    const post = new taskModel(req.body);
    await post.save();
    res.send({ msg: "post has been created" });
  } catch (e) {
    console.log(e);
    res.send({ msg: "Something went Wrong" });
  }
});

// taskRouter.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   const { userID } = req.body;
//   try {
//     const post = await taskModel.findById(id);
//     if (post.userID == userID) {
//       await taskModel.findByIdAndDelete(id);
//       res.send({ msg: "User has baan deleted" });
//     } else {
//       res.status(401);
//       res.send({ msg: "User not matched" });
//     }
//   } catch (err) {
//     console.log(e);
//     res.send({ msg: "Something went Wrong" });
//   }
// });

// taskRouter.patch("/:id", async (req, res) => {
//   const { id } = req.params;
//   const { userID } = req.body;
//   const data = req.body;
//   try {
//     const post = await taskModel.findById(id);
//     if (post.userID == userID) {
//       await taskModel.findByIdAndUpdate(id, { ...data });
//       res.send({ msg: "User has baan updated" });
//     } else {
//       res.status(401);
//       res.send({ msg: "User not matched" });
//     }
//   } catch (err) {
//     console.log(e);
//     res.send({ msg: "Something went Wrong" });
//   }
// });

module.exports = { taskRouter };
