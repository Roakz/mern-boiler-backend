// Requiring the User model created in models/user.js
const User = require('../models/users')
const bcrypt = require('bcrypt')
const JWTService = require('../config/jwt-generator')

// Create a User. Using Bcrypt to hash the password before storing.
const registerUser = async (req, res) => {
	// Hash the password using bcrypt. This acclepts a callback with an error and hashed password params.
	bcrypt.hash(req.body.password, 10, async function(err, hash) {
		// If there is an error send it to the front end for use.
		if (err) {
			res.send(err)
		}
		// try to create a user with the mongoose schema. and the provided username and hashed password.
		try {
			let user = User.create({ email: req.body.username, password: hash })
			// If the user is successfully created then send a success 200 status to the front end.
			if (user) {
				res.send('User created')
				res.status(200).send()
			}
		// If an error occurs then send a 500 to the front end.
		} catch (e) {
			res.status(500).send()
		}
	})
}
// Authenticating the user. Once authenticated we will return a JWT token.
const authenticated = async (req, res) => {
	// Finding the user from the database
	let user = await User.findOne({ email: req.body.username })
	// If there is no user in the database return a 401 unauthorized and a message.
	if (!user) {
		return res.status(401).json({ message: 'email not found' })
	}
	// If a user is found we check the password using bcrypt to compare the hash.
	if (user) {
		match = await bcrypt.compare(req.body.password, user.password)
	}
	// check to see if the password does not match then return a 401 if this is the case with a message.
	if (!match) {
		return res.status(401).json({ message: 'incorrect password' })
	}
	// If the user and the password both match then generate a JWT token and send it to the front end.
	// Send a success status 200.
	if (user && match) {
		res.status(200)
		const token = await JWTService.generateToken(user)
		return res.json({ token })
	}
	// If none of the above apply then return a 500 internal server error with a message.
	return next(res.status(500).json('Internal server error'))
}

// exporting the above functions so that they can be refered to in the router.
module.exports = {
	registerUser,
	authenticated
}
