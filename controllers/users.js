// Requiring the User model created in models/user.js
const User = require('../models/users')
const bcrypt = require('bcrypt')
const passport = require('passport')
const JWTService = require('../config/jwt-generator')

// Create a User. Using Bcrypt to hash the password before storing.
const registerUser = async (req, res) => {
	bcrypt.hash(req.body.password, 10, async function(err, hash) {
		if (err) {
			console.log(err)
		}

		try {
			let user = User.create({ email: req.body.username, password: hash })
			if (user) {
				res.send('User created')
				res.status(200).send()
			}
		} catch (e) {
			res.status(500).send()
		}
	})
}
// Authenticating the user with passport. Once authenticated will return a JWT token.
const authenticated = (req, res, next) => {
	passport.authenticate('local', async (err, user, info) => {
		// if there is an error return a 500 to the front end to be used as error message.
		if (err) {
			return next(res.status(500).json(err))
		}
		// The info param contains error messages pertaining to a 401 which will be sent to the front
		// end to be used for flash errors
		if (info) {
			return res.status(401).json(info.message)
		}
		// this only happens if there are no errors or if no info returns. info only returns if there is
		// 401.
		res.status(200)
		const token = await JWTService.generateToken(user)
		return res.json({ token })
	})(req, res, next)
}

// exporting the above functions so that they can be refered to in the router.
module.exports = {
	registerUser,
	authenticated
}
