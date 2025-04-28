const Task = require('../models/task')

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json(task)
}

exports.getTasks = async (req, res) => {
  const tasks = await Task.findAll()
  res.json(tasks)
}
