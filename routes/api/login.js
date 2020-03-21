const {Router} = require('express')
const route = Router()
const {Users} = require('../../data/db')


route.post('/'  ,  async(req , res) => {
    let a = req.body.user
    const logi = await Users.findOne({
        where : {email : a.email}               
    })
    if(!logi){
        return res.send('incorrect username')
    }
    if(logi.password != a.password){
        return res.send('incorrect password')
    }

    const prof = await Users.findOne({
        attributes : [
            'firstname' , 'token'
        ],
        where : {email : a.email}               
    })

    return res.send(prof)
})

module.exports = {route}