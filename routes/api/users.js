const {Router} = require('express')
const route = Router()
const {Users} = require('../../data/db')
const {createusers} = require('../../controllers/users')

route.post('/' , async (req , res) => {
    let a = req.body.user
    const user = await createusers(
      a.firstname,
      a.lastname,
      a.email,
      a.password,
      a.phone_Number,
      a.Roll_Number,
      a.Course
    )
    
    return res.send('hey  ' + a.firstname + '  you have registered succesfully')

})

module.exports = {route}