// This seed file must be run in order for the data to be found and rendered!!!

// requiring the User model and mongoose 
const User = require('../models/users')
const mongoose = require('mongoose')

// opening a connection to the MongoDB mern-boilerplate database.
mongoose.connect('mongodb://localhost/mern-boilerplate')

// Creating new users to be saved to the database. They are in an array whihc we will iterate below.
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

// A variable used to determine when we will disconnect from the database.
let done = 0

// Iterating over the hardcoded users above. We save each instance and then add 1 to our done variable.
// it then checks to see if done is the same length of the array we are iterating yet. If it is then we
// disconnect from the database. 

// This is becuase we are dealing with asynchronus code. It ensures that it doesnt  disconnect before it is 
// finished saving instances of user.
for (let i = 0; i < users.length; i++) {
	users[i].save((err, result) => {
		done++
		if (done === users.length) {
            exit()
		}
	})
}

// the disconnection method which is called when the done counter reaches the array length
let exit = () =>{
    mongoose.disconnect()
}

