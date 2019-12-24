let User = require('../models/users')

mongoose.connect('mongodb://localhost/mern-boilerplate', {
	userNewUrlParser: true
})

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
	products[i].save((err, result) => {
		done++
		if (done === products.length) {
            exit()
		}
	})
}

let exit = () =>{
    mongoose.disconnect()
}

