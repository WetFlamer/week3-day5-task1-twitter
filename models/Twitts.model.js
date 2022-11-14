const mongoose = require('mongoose')

const twittsScheme = {
    user: {
        ref: 'users',
        type: mongoose.SchemaTypes.ObjectId
    },
    text: String,
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'Users'
       }],
    comments: {
        ref: 'comments',
        type: mongoose.SchemaTypes.ObjectId
    }
}

const Users = mongoose.model('twitts', twittsScheme);

module.exports = Users;