const {Users} = require('../data/db')
const{getrandomstring} = require('../utils/random')

async function createusers(firstname , lastname , email , password , phone_Number , Roll_Number , Course) {
    const newuser = await Users.create({
        firstname
        ,lastname,
        token : getrandomstring(32),
        email,
        password,
        phone_Number,
        Roll_Number,
        Course
    })
 const user = await Users.findOne({
     attributes : [
         'firstname' , 'lastname' , 'email' , 'phone_Number'
         ,'Roll_Number' , 'Course'
     ],
     where : {token : newuser.token}
 })

 return user 

}
async function findUserByToken(token) {
    const user = await Users.findOne({
        where: { token }
    })

    if (!user) {
        return { body: [ 'Invalid token' ]}
    }

    return user
}

module.exports = {createusers}