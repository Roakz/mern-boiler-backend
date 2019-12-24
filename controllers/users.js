const {UserModel} = require('../models/users')


let index = async (req, res) => {
    let users = await UserModel.find()
    res.json(users)
}

module.exports = {
    index,
}