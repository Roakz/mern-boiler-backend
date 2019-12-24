// requiring express into the file 
const express = require('express')
// Requiring the users Controller into the file
const usersController = require('./controllers/users')
// creating an instance of the express Router and assigning it to the variable router.
const router = express.Router()

// creating a get route at the url /api/users. It then accepts the callback usersController.index
// this is the index method from the usersController file that we required above.
router.get("/api/users", usersController.index )

// exporting the express router. This will be used by the server.js file to assign the use of these routes 
// to the app.
module.exports = router