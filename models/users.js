// Requiring mongoose which will be used to create the user schema and model.
const mongoose = require( 'mongoose')

// Creating a new Schema with mongoose and assigningbit to the UserSchema variable.
const UserSchema = new mongoose.Schema({
	username: {
        type: String,
        required: true
	}
})

// exporting the model to be used in other files. This is a one line sugar. 
// We are naming the mondel here and assigning it the above defined schema. PLus we export it.
module.exports = mongoose.model('users', UserSchema)


