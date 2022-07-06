const getAllTasks = (req, res) => {
  res.status(200).send('all items')
}

const getTask = (req, res) => {
  res.status(200).send('single item')
}

const createTask = (req, res) => {
  res.status(200).send('task created')
}

const updateTask = (req, res) => {
  res.status(200).send('task updated')
}

const deleteTask = (req, res) => {
  res.status(200).send('task deleted')
}

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
}