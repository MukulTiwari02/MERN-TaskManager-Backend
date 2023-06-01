const express = require('express');
const router = express.Router();
const Task = require("../model/taskModel")
const {getTasks, createTask, getTask, deleteTask, updateTask} = require("../controllers/taskController")

router.get("/", getTasks)
router.get("/:id", getTask)
router.post("/", createTask)
router.delete("/:id", deleteTask)
router.patch("/:id", updateTask)

// Alternate way to create routes below
// router.route("/").get(getTasks).post(createTask);
// router.route("/:id").delete(deleteTask).patch(updateTask).get(getTask);

module.exports = router;