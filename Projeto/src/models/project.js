const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Project = sequelize.define('Project', {
  titulo: DataTypes.STRING,
  descricao: DataTypes.STRING
})

module.exports = Project
