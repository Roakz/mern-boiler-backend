const LocalStrategy = require('passport-local').Strategy
const User = require('../models/users')
const bcrypt = require('bcrypt')

const validPassword = async (password, userPassword) => {
	return await bcrypt.compare(password, userPassword)
	
}

const passportConfig = passport => {
	passport.use(
		new LocalStrategy(async function(username, password, done) {
			User.findOne({ email: username }, async (err, user) => {

				if (err) {
					return done(err, false)
				}

				if (!user) {
					return done(null, false, { message: 'email not found' })
				}

				if (await validPassword(password, user.password) == false) {
					return done(null, false, { message: 'incorrect password' })
				}
				
				return done(null, user)
			})
		})
	)
}

module.exports = passportConfig
