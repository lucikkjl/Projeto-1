const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const saltRounds = 10

exports.signup = async (req, res) => {
  const { nome, email, senha } = req.body
  const hash = await bcrypt.hash(senha, saltRounds)
  const user = await User.create({ nome, email, senha: hash })
  res.status(201).json(user)
}

exports.login = async (req, res) => {
  const { email, senha } = req.body
  const user = await User.findOne({ where: { email } })
  if (!user) return res.status(404).json({ erro: 'Usuário não encontrado' })

  const match = await bcrypt.compare(senha, user.senha)
  if (!match) return res.status(401).json({ erro: 'Senha incorreta' })

  const token = jwt.sign({ id: user.id }, 'segredo', { expiresIn: '1h' })
  res.json({ mensagem: 'Login realizado com sucesso', token })
}