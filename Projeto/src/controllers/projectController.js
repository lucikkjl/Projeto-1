const Project = require('../models/project')

exports.createProject = async (req, res) => {
  const project = await Project.create(req.body)
  res.status(201).json(project)
}

exports.getProjects = async (req, res) => {
  const projects = await Project.findAll()
  res.json(projects)
}
