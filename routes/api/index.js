const {Router} = require('express')
const route = Router()

const usersRouter = require('./users').route
const loginRouter = require('./login').route

route.use('/users' , usersRouter )
route.use('/login' , loginRouter )

module.exports = {route}