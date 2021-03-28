const express = require('express')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.get('/', (req, res) =>{
    res.send('OK');
})
require('./app/controllers/index')(app)
app.listen(3000, () => console.log('🔥 Application running'))