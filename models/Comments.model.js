const mongoose = require('mongoose')

const commentScheme = {
    user: {
        ref: 'users',
        type: mongoose.SchemaTypes.ObjectId
    },
    text: String,
    twitt: {
        ref: "twitts",
        type: mongoose.SchemaTypes.ObjectId
    },
}

const Comments = mongoose.model('comments', commentScheme);

module.exports = Comments;