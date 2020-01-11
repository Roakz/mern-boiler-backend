require("dotenv").config();

// - requiring express allows us to use the http methods and create a server to receive incoming requests
//and send outgoing respponses. 
// - importing the routes file which exports the express Router
//  - mongoose is used for creating a schema and model for data validation. It also allows for the connection
// to to MongoDB the document based database that is commonly used in the MERN stack M = Mongo

const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

// creating an instance of express. We can do this now that we have required it
const app = express()

// assigning the express port to a constant. Anything except 3000 should workk fine. 3000 is the default 
// port that us used for React which is used on the front end.
const port = 3001

// connecting to the MongoDB Database using mongoose. The catch block will log an error upon initial connection
mongoose.connect('mongodb://localhost/mern-boilerplate', {
	useNewUrlParser: true,
})
.catch(error => console.log(error))

// This will listen and log any errors after initial connection
mongoose.connection.on('error', err => console.log(err))

// Cors middleware to enable cross orgin request from the front end
app.use(cors({
    origin: process.env.FRONT_END_DOMAIN
}));
app.use(express.json())
app.use(express.urlencoded())
// Directing express to use the router from the routes.js file for backend api serving.
app.use(routes)

// Turning the server on simply put. We tell express what port top listen on.In this case its 5000 which we set as the port
// constant further up in the file. Once its running then its will console lof the message as directed.
app.listen(port, () => console.log(`server started on ${port}.`))
