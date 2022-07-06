const Task = require('../models/Task')

const getAllTasks = (req, res) => {
  res.status(200).send("all items");
};

const getTask = (req, res) => {
  const {id} = req.params;
  res.status(200).json({id: id});
};

const createTask = (req, res) => {
  res.status(200).json(req.body);
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
