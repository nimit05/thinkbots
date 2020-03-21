const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect : 'mysql',
    database : 'thinkbots',
    username : 'creature',
    password : 'crtr'
})

const Users = db.define('users' , {

    'Roll_Number' : {
        type : Sequelize.STRING,
        primaryKey : true,
        allownull : false
    },
    'firstname' : {
        type : Sequelize.STRING(30),
        allownull : true
    },
    'lastname' : {
        type : Sequelize.STRING(30),
    },
    'token' : {
        type : Sequelize.STRING(100)
    },
    'email' : {
        type : Sequelize.STRING(50),
        allownull : false,
        unique : true
    },
    'password' : {
        type : Sequelize.STRING(30),
        allownull : false
    },
    "image" : {
        type : Sequelize.STRING
    },
    'phone_Number' : {
        type : Sequelize.STRING,
        allownull : false
    },
    'Course' : {
        type : Sequelize.STRING(50),
        allownull : false
    }
    
})

module.exports = {
    Users , db
}   