const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const User = require('./user')
const Project = require('./project')

const Task = sequelize.define('Task', {
  titulo: DataTypes.STRING,
  descricao: DataTypes.STRING,
  status: DataTypes.STRING
})

Task.belongsTo(User)
Task.belongsTo(Project)

module.exports = Task