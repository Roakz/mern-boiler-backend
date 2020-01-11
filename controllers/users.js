// Requiring the User model created in models/user.js
const User = require('../models/users')
const bcrypt = require('bcrypt')

// Create User
const registerUser = async (req, res) => {
	bcrypt.hash(req.body.password, 10, async function(err, hash) {
		if (err) {
			console.log(err)
		}

		try {
			let user = User.create({ email: req.body.email, password: hash })
			if (user) {
				res.send('User created')
				res.status(200).send()
			}
		} catch (e) {
			console.log(e)
			res.status(500).send()
		}
	})
}
// exporting the above functions so that they can be refered to in the router.
module.exports = {
	registerUser
}
