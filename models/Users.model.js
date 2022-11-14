const mongoose = require('mongoose')

const userScheme = {
    name: String,
    bio: String,
}

const Users = mongoose.model('users', userScheme);

module.exports = Users;