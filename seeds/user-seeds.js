const User = require('../models/users')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/mern-boilerplate')

let users = [
	new User({
		username: 'Rory Calhoon'
	}),
	new User({
		username: 'Bella Anderson'
	}),
	new User({
		username: 'Ryan Renylds'
	})
]

let done = 0

for (let i = 0; i < users.length; i++) {
	users[i].save((err, result) => {
		done++
		if (done === users.length) {
            exit()
		}
	})
}

let exit = () =>{
    mongoose.disconnect()
}

