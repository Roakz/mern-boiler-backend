const express = require('express')
const usersController = require('./controllers/users')
const router = express.Router()

router.get("/api/users", usersController.index )

module.exports = router