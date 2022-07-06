const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({tasks}); 
  } catch (error) {
    res.status(500).json({msg:error})
  }

};

const getTask = (req, res) => {
  const {id} = req.params;
  res.status(200).json({id: id});
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({task})
  } catch (error) {
    res.status(500).json({msg: error}) 
  }
};

const updateTask = (req, res) => {
  const {id} = req.params;
  res.status(200).json({id: id})
};

const deleteTask = (req, res) => {
  const {id} = req.params;
  res.status(200).json({id: id})
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
