const express = require('express')
const app = express()
const sequelize = require('./config/database')
require('dotenv').config()

app.use(express.json())

const userController = require('./controllers/userController')
const projectController = require('./controllers/projectController')
const taskController = require('./controllers/taskController')

app.post('/api/users', userController.signup)
app.post('/api/login', userController.login)

app.post('/api/projects', projectController.createProject)
app.get('/api/projects', projectController.getProjects)

app.post('/api/tasks', taskController.createTask)
app.get('/api/tasks', taskController.getTasks)

sequelize.sync()
  .then(() => console.log('Banco sincronizado'))
  .catch(err => console.error(err))

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
