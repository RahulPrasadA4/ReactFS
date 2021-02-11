const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesurls = require('./routes/routes')
const cors = require('cors')

dotenv.config()


mongoose.connect(process.env.DB_AUTH, ()=> console.log("MOngo Connected"))



app.use(express.json())
app.use(cors())
app.use('/app', routesurls)
app.listen(4000, ()=> console.log('Server started'))