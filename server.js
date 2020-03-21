const exp = require('express')
const app = exp()
const {db} = require('./data/db')
const apiroute = require('./routes/api').route

app.use(exp.json())
app.use('/api' , apiroute)

db.sync({}).then(() => {
    app.listen(1591 , () => {
        console.log('server started on http://localhost:1591')
    })
})