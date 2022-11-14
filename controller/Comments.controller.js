const Comments = require('../models/Comments.model')

module.exports.commentsController = {
    addComment: (req, res) => {
        Comments.create({
            user: req.body.user,
            text: req.body.text,
            twitt: req.body.likes
        }).then(() => {
            res.json("Комментарий добавлен");
        })
    },
    deleteComment: (req, res) => {
        Comments.findByIdAndRemove(req.params.commentId).then(comment => {
            res.json(comment)
        })
    },
    updateComment: (req, res) => {
        Comments.findByIdAndUpdate(req.params.commentId, {
            user: req.body.user,
            text: req.body.text,
        },{new: true}).then( comment => {
            res.json(comment)
        })
    },
    getCommentbyUserId: (req, res) => {
        Comments.find({user: req.params.userId})
        .populate('user').then(comment => {
            res.json(comment)
        })
    },
    getComments: (req, res) => {
        Comments.find().populate('user')
        .then(comments => {
            res.json(comments)
        })
    },
}