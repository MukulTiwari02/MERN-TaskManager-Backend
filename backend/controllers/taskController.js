const Task = require("../model/taskModel")

// Get all task
const getTasks = async (req,res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({msg : error.message})
    }
}

// Get a single task
const getTask = async (req,res) => {
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        if(!task)
        {
            res.status(404).json({msg : "Task not found"});
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg : error.message})
    }
}

// Create a task
const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body);
        res.json(task);
    } catch (error) {
        res.json({msg : error.msg});
    }
}

// Delete a task
const deleteTask = async (req,res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task)
        {
            res.status(404).json({msg : "Task not found"});
        }
        res.json("Task deleted"); 
    } catch (error) {
        res.json({msg : error.msg});
    }
}

//Update a task
const updateTask = async (req,res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body,{new : true, runValidators:true});
        if(!task)
        {
            res.status(404).json({msg : "Task not found"});
        }
        res.json(task);
    } catch (error) {
        res.json({msg : error.msg}); 
    }
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask 
}