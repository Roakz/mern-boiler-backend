const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const app = express()
const port = 5000

mongoose.connect('mongodb://localhost/mern-boilerplate', {
	userNewUrlParser: true
})

mongoose.connection.on('error', err => console.log(err))

app.use(routes)

app.listen(port, () => console.log(`server started on ${port}.`))
