// Requiring the User model created in models/user.js
const User = require('../models/users')
const bcrypt = require('bcrypt')
const passport = require('passport')

// Create User
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

const authenticated = (req, res, next) => {
	passport.authenticate('local', (err, user, info) => {
		if (err) { return next(res.json(err)); }
		// if (!user) {  console.log(info) }
		if (info) {
		return	res.status(401).json(info)
		}

		return res.status(200).json("User authenticated")
        
  })(req, res, next);
	}

// exporting the above functions so that they can be refered to in the router.
module.exports = {
	registerUser,
	authenticated
}
