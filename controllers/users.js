// Requiring the User model created in models/user.js
const User = require('../models/users')

// The callback funtion that is called by the router in the routes file which is activated upon a HTTP GET
// request to "http://localhost:5000/api/users"
// we use mongoose to apply a query on the MongoDB user collection in the mern-boilerplate document.
let index = async (req, res) => {
    let users = await User.find()
    res.json(users)
}
// exporting the above functions so that they can be refered to in the router.
module.exports = {
    index,
}